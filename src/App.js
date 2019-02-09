import React, { Component } from 'react';

import './App.css';
import Form from './Components/Form';

class App extends Component {
  state = {
    items: {}
  }

  changeHandler = (updatedItems) => {
    this.setState({
      items: {
        ...this.state.items,
        ...updatedItems
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Form
          onChange={items => this.changeHandler(items)}
        />
      </div>
    );
  }
}

export default App;
