import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Puestas from '../componentes/pedidos/Puestas';
import Cambios from '../componentes/pedidos/Cambios';
import Retiradas from '../componentes/pedidos/Retiradas';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-material-ui';
import mainNav from '../navigators/mainNav';
import MyMap from '../componentes/mapa';
import { UPDATE_POSITION } from '../constants';
// import markers from '../componentes/markers';

const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

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
    
    updateMap() {
        return <MyMap />
    }

    _handleSaveCoords = () => {
        // console.log(this.props)
        let { screenProps, position } = this.props
        let data = {
            uid: screenProps,
            name: 'Adolfo',
            lat: position.latitude,
            lng: position.longitude,
            speed: position.speed
        }
        let url = 'https://contenedoressatur.es/wp-json/ubicaciones-satur/v1/choferes'
        fetch(url, {
            'method': 'POST',
            'headers': new Headers({
                'Content-Type': 'application/json'
            }),
            'body': JSON.stringify(data)
        })
            .then(response => response.json)
            .then(data => {
                if (data.status === "OK") {
                    console.log(data)
                } else {
                    console.log(data)                    
                }
            })
    }


    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                <Text style={{ fontSize: 18, fontWeight: 'bold'  }} >Aquí encontrarás tus pedidos pendientes.</Text>
                <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <Button onPress={this._handleSaveCoords} title="Guardar Ubicación"></Button>
                </View>
                {this.updateMap()}
            </View>
        )
    }
}

UserViewMap.propTypes = {
    setLocation: PropTypes.func.isRequired,
    position: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        position: state.locations.position,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLocation: (position) => {
            dispatch({
                type: UPDATE_POSITION,
                payload: position.coords
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserViewMap);