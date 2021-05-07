import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class SimpleMap extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-container">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.lat}
            lng={this.props.lng}
            flat={this.props} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
