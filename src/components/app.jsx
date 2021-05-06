import React, { Component } from 'react';

import flats from '../../data/flats.js';
import FlatList from './flat_list.jsx';
import SimpleMap from './google_map.jsx';
import Marker from './marker.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
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
        <SimpleMap />
      </div>
    );
  }
}

export default App;
