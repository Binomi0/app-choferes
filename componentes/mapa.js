import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, Text, Button } from 'react-native';
import { MapView } from "expo";
import { connect } from 'react-redux';
import { UPDATE_POSITION, UPDATE_MARKER } from '../constants';
// import { getUserLocation } from '../functions'

class Mapa extends Component {

    _handleSaveCoords() {
        
    }

    render() {
        console.log(this.props)
        let { setLocation, setMarker, position, marker } = this.props
        // let { mapRegion } = this.state
        return (
            <View style={{flex:1}}>
                <MapView
                    style={{ flexDirection: 'column', alignSelf: 'stretch', height: 300, width: 360, marginTop: 20 }}
                    region={position}
                    // showUserLocation={true}
                    userLocationAnnotationTitle='Mi posición actual'
                    // followsUserLocation={true}
                    // showsMyLocationButton={true}
                    onRegionChange={(e) => setLocation(e)}
                    onRegionChangeComplete={(e) => setMarker(e)}
                    showsPointsOfInterest={false}
                    zoomControlEnabled={false}
                    loadingEnabled={true}
                    minZoomLevel={10}
                    maxZoomLevel={20}
                >                    
                    <MapView.Marker
                        coordinate={marker}
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
    setLocation: PropTypes.func.isRequired,
    position: PropTypes.object.isRequired,
    marker: PropTypes.object.isRequired,
    setMarker: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        position: state.locations.position,
        marker: state.locations.marker
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