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

    componentDidMount() {        
        this.geoLocateUser()
    }
    
    geoLocateUser() {  

        error = err => {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        }
        navigator.geolocation.getCurrentPosition((position) => this.props.setLocation(position), error, geolocationOptions);
    }


    updateMap() {
        return <MyMap />
    }
    

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                <Text style={{ fontSize: 18, fontWeight: 'bold'  }} >Aquí encontrarás tus pedidos pendientes.</Text>
                {this.updateMap()}
            </View>
        )
    }
}

UserViewMap.propTypes = {
    setLocation: PropTypes.func.isRequired
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

export default connect(null, mapDispatchToProps)(UserViewMap);