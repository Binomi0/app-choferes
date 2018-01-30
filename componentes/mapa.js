import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { MapView } from "expo";
import { connect } from 'react-redux';
import { SET_USER_LOCATION } from '../constants';

class Mapa extends Component {

    _handleMapRegionChange = mapRegion => {
        this.props.setLocation(mapRegion)
    };

    _handleSaveCoords = mapRegion => {
        
    };

    render() {
        return (
            <View style={{flex:1}}>
                <MapView
                    style={{alignSelf: 'stretch', height: 300, marginTop: 20 }}
                    region={this.props.position}
                    onRegionChange={this._handleMapRegionChange}
                    showsPointsOfInterest={false}
                    zoomControlEnabled={false}
                    loadingEnabled={true}
                    minZoomLevel={14}
                    maxZoomLevel={20}
                    >                    
                        <MapView.Marker
                            coordinate={this.props.position}
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

const mapStateToProps = state => {
    return {
        position: state.locations.position
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        setLocation: coords => {
            dispatch({
                type: SET_USER_LOCATION,
                payload: coords
            })
        }    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mapa);