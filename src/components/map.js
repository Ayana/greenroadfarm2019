import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const Marker = () => {
	return(
		<div className="ico-pin"></div>
	)
}
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 36.267348,
      lng: 137.960348
    },
    zoom: 12
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '100%', marginBottom: '1em' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCsKwpWIDGkUZ2_Dfd39JkYuHXTjE5f8CE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.center.lat}
            lng={this.props.center.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;