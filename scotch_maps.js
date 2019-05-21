import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
   showingInfoWindow: false,  //Hides or the shows the infoWindow
   activeMarker: {},          //Shows the active marker upon click
   selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
 };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{
         lat: -27.339974010141237,
         lng: 152.99835395067083
        }}
      >
      <Marker
        onClick={this.onMarkerClick}
        name={'Test location 1'}
      />

      <Marker 
        onClick={this.onMarkerClick}
        name={'Test location 2'} 
        position={{lat: -27.38128224208054,lng:152.98827670452758}}
        draggable={true}
	   /> 
      <Marker 
        onClick={this.onMarkerClick}
        name={'Current location 3'} 
        position={{lat: -27.375191002780266,lng:152.98424593574643}}
        draggable={true}
	   /> 
      <Marker 
        onClick={this.onMarkerClick}
        name={'Current location 4'} 
        position={{lat: -27.360359251086244,lng:152.98625227118478}}
        draggable={true}
	   /> 
     <Marker 
        onClick={this.onMarkerClick}
        name={'Current location 5'} 
        position={{lat: -27.375191002780266,lng:152.98424593574643}}
        draggable={true}
	   /> 
     <Marker 
        onClick={this.onMarkerClick}
        name={'Current location 6'} 
        position={{lat: -27.381306059838384,lng:152.98178697520976}}
        draggable={true}
	   /> 

      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
        </div>
      </InfoWindow>  
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCkN-G3CtYBPo7vq0eT1tuqrJQXCmAtZnc'
})(MapContainer);