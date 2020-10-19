import React from "react";
import Fish from './Fish';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
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
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
}

export default App;
