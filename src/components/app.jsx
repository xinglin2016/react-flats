import React, { Component } from 'react';

import Flat from './flat.jsx';
import FlatList from './flat_list.jsx';
import SimpleMap from './google_map.jsx';
import Marker from './marker.jsx';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={this.state.flats} />
          <div className="card">

          </div>
        </div>
        <div className="map-container">
          <div className="marker">
            <Marker />
          </div>
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
