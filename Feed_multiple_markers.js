import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
  width: '100%',
  height: '100%'
}
 
export class MapContainer extends Component {
	
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
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
	var points = [
		{ lat: 1.31, lng: 103.87 },
		{ lat: 1.30, lng: 103.86 },
		{ lat: 1.31, lng: 103.86 },
		{ lat: 1.30, lng: 103.87 }
	]
/* 	var bounds = new this.props.google.maps.LatLngBounds();	
	for (var i = 0; i < points.length; i++) {
	  bounds.extend(points[i]);
	}   */
	
	
var markers = new this.props.google.Map.Marker();
  for (var i = 0; i < points.length; i++) {
    markers(i).position.lat=points(i).lat;
    markers(i).position.lat=points(i).lat
  }
  return (
	
			<Map 
			google={this.props.google}
			style={style}
			initialCenter={{lat:1.308,lng:103.8631}}
			>
		 
			<Marker 
			onClick={this.onMarkerClick}
			name={'Current location'} 
			draggable={true}
			/> 
			
			<Marker 
			onClick={this.onMarkerClick}
			name={'Current location 2'} 
			position={{lat:1.30,lng:103.86}}
			draggable={true}
			/> 
			
			<InfoWindow
			marker={this.state.activeMarker}
			visible={this.state.showingInfoWindow}
			onClose={this.onClose}
			>
			<div>
			<h1>{this.state.selectedPlace.name}</h1>
			</div>
			</InfoWindow>
			</Map>
    );
  }
} 
 
export default GoogleApiWrapper({
	apiKey: ('AIzaSyCkN-G3CtYBPo7vq0eT1tuqrJQXCmAtZnc')
	})(MapContainer)