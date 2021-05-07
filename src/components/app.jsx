import React, { Component } from 'react';

import flats from '../../data/flats';
import FlatList from './flat_list';
import SimpleMap from './google_map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[1],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }


  render () {
    return (
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.state.selectFlat} selectedFlat={this.state.selectedFlat} />
        <SimpleMap selectedFlat={this.state.selectedFlat} />
      </div>
    );
  }
}

export default App;
