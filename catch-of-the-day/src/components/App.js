import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = (fish) => {
    // Take a copy of existing state.
    const fishes = {...this.state.fishes};
    // Add new fish to fishes.
    fishes[`fish${Date.now()}`] = fish;
    // Set the new fishes object to state.
    this.setState({
      fishes //fishes: fishes
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
