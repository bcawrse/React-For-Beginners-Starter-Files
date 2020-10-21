/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  myInput = React.createRef();

  goToStore = (event) => {
    // Stop the form from submitting.
    event.preventDefault();
    // Get the text from that input
    const storeName = this.myInput.current.value;
    // Change the page to /store/whatevery-they-entered
    this.props.history.push(`/store/${storeName}`);
  }
  render() {
    return (
    // <Fragment>
      <form className="store-selector" onSubmit={this.goToStore}>
        { /* Comment */ }
        <h2>Please Enter A Store</h2>
        <input 
          type="text" 
          required 
          ref={this.myInput}
          placeholder="Store Name"
          defaultValue={getFunName()} 
        />
        <button type="submit">Visit Store {"->"}</button>
      </form>
    // </Fragment>
    );
  }
}

export default StorePicker;
