/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
    // <Fragment>
      <form className="store-selector">
        { /* Comment */ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store -&gt;</button>
      </form>
    // </Fragment>
    );
  }
}

export default StorePicker;
