import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Puestas from '../componentes/pedidos/Puestas';
import Cambios from '../componentes/pedidos/Cambios';
import Retiradas from '../componentes/pedidos/Retiradas';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, Divider } from 'react-native-material-ui';
import { MapView } from "expo";

class MisPedidos extends Component {
    render() {
        console.log('Mis Pedidos Props', this.props);
        return (
            <View><Text>Pedidos</Text></View>
            // <PedidosTabs screenProps='Props para PedidosTabs' />
        )
    }
}

class UserViewMap  extends Component {
    constructor(props){
        console.log(props)
        super(props);
        this.state = {
            mapRegion: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            markers: [
                {
                    title: 'Mi ubicación',
                    description: 'Aqui es donde estoy',
                    latlng : {
                        latitude: 0,
                        longitude: 0
                    }
                }
            ]
        };
    }
    
    componentWillMount() {
        let { position } = this.props
        console.log('Position:', position)
        this.setState({
            mapRegion: {
                latitude: position.latitude,
                longitude: position.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            markers: [
                {
                    title: 'Mi ubicación',
                    description: 'Aqui es donde estoy',
                    latlng : {
                        latitude: position.latitude,
                        longitude: position.longitude
                    }
                },
                {
                    title: 'Mi ubicación2',
                    description: 'Aqui es donde estoy2',
                    latlng : {
                        latitude: position.latitude + 0.001,
                        longitude: position.longitude + 0.001
                    }
                }
            ]
        })
    }    

    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };

    render() {
        console.log(this.props)
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold'
                }} >Aquí encontrarás tus pedidos pendientes.</Text>
                <MapView
                    style={{alignSelf: 'stretch', height: 200, marginTop: 20 }}
                    region={this.state.mapRegion}
                    onRegionChange={this._handleMapRegionChange}
                    showsPointsOfInterest={false}
                    zoomControlEnabled={false}
                    loadingEnabled={true}
                    minZoomLevel={14}
                    maxZoomLevel={20}
                >
                    {this.state.markers.map((marker, i) => (
                        <MapView.Marker
                            key={i}
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                    />
                ))}

                </MapView>
            </View>
        )
    }
}

UserViewMap.propTypes = {
    position: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        position: state.locations.position
    }
}

export default connect(mapStateToProps)(UserViewMap);