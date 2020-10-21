import React from "react";
import PropTypes from 'prop-types';
import Fish from './Fish';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount() {
    const { params } = this.props.match;
    // first reinstate our localStorage.
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    // Take a copy of existing state.
    const fishes = {...this.state.fishes};
    // Add new fish to fishes.
    fishes[`fish${Date.now()}`] = fish;
    // Set the new fishes object to state.
    this.setState({
      fishes //fishes: fishes
    });
  };

  updateFish = (key, updatedFish) => {
    // Take a copy of the current state
    const fishes = { ...this.state.fishes };
    // Update that state.
    fishes[key] = updatedFish;
    // Set that to state;
    this.setState({ fishes });
  };

  deleteFish = (key) => {
    // take a copy of state.
    const fishes = { ...this.state.fishes };
    // update the state. 
    // Set to null instead of using delete so FireBase also updates state.
    fishes[key] = null;
    // update state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  addToOrder = (key) => {
    // Take a copy of state.
    const order = {...this.state.order};
    // Either add to the order or update the number to the order.
    order[key] = order[key] + 1 || 1;
    // Call setState to update our state object.
    this.setState({order});
  };

  removeFromOrder = (key) => {
    // Take a copy of state.
    const order = {...this.state.order};
    // update the state.
    // use the delete keyword since orders aren't stored in FireBase.
    delete order[key];
    // Call setState to update our state object.
    this.setState({order});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => 
              <Fish 
                key={key} 
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            )}
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes} 
          order={this.state.order} 
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory 
          addFish={this.addFish} 
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes} 
          fishes={this.state.fishes}
        />
      </div>
    )
  }
}

export default App;
