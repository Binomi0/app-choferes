import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, Text, Button } from 'react-native';
import { MapView } from "expo";
import { connect } from 'react-redux';
import { UPDATE_POSITION, UPDATE_MARKER } from '../constants';
// import { getUserLocation } from '../functions'

const mapRegion = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    longitude: -0.574234, 
    latitude: 38.2085652
}

const marker = {
    longitude: -0.574234, 
    latitude: 38.2085652
}

class Mapa extends Component {
    // state = {
    //     mapRegion: this.props.mapRegion,
    //     // marker: this.props.marker
    // }

    // _handleMapRegionChange = mapRegion => {
    //     // this.props.setLocation(coords)
    //     // this.props.setMarker(coords)
    //     this.setState({ mapRegion })

    // };

    // onRegionChange(region) {
    //     this.state.region.setValue(region);
    // }

    // _handleMapRegionChangeComplete = mapRegion => {
    //     console.log(mapRegion)
    // }

    // _handleSaveCoords = mapRegion => {
        
    // };

    render() {
        // console.log(getUserLocation())
        let { setLocation, setMarker } = this.props
        // let { mapRegion } = this.state
        return (
            <View style={{flex:1}}>
                <MapView
                    style={{ flexDirection: 'column', alignSelf: 'stretch', height: 300, width: 360, marginTop: 20 }}
                    region={this.props.position || mapRegion}
                    // showUserLocation={true}
                    userLocationAnnotationTitle='Mi posición actual'
                    // followsUserLocation={true}
                    // showsMyLocationButton={true}
                    onRegionChange={(e) => setLocation(e)}
                    // onRegionChangeComplete={this._handleMapRegionChangeComplete}
                    showsPointsOfInterest={false}
                    zoomControlEnabled={false}
                    loadingEnabled={true}
                    minZoomLevel={10}
                    maxZoomLevel={20}
                    >                    
                        <MapView.Marker
                            coordinate={this.props.position || marker}
                            title='Posicion Actual'
                            description='Mostrando la ubicación de las coordenadas actuales'
                        />
                </MapView>
                <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <Button onPress={this._handleSaveCoords} title="Guardar Ubicación"></Button>
                </View>
                <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <Text>{this.props.position.latitude} - {this.props.position.longitude}</Text>
                </View>
            </View>
        );
    }
}

Mapa.PropTypes = {
    setLocation: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        position: state.locations.position
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        setLocation: mapRegion => {
            dispatch({
                type: UPDATE_POSITION,
                payload: mapRegion
            })
        },
        setMarker: coords => {
            dispatch({
                type: UPDATE_MARKER,
                payload: coords
            })
        }  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mapa);