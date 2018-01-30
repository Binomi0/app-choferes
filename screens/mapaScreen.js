import React, { Component } from 'react';
// import { connect } from 'react-redux';
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
// import markers from '../componentes/markers';

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

    componentWillMount() {
        let { position } = this.props
        console.log('Position:', position)
        
    }    

    _handleMapRegionChange = mapRegion => {
        this.props.setLocation(mapRegion)
    };

    _handleSaveCoords() {
        return true
    }

    render() {
        let { position } = this.props
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold'
                }} >Aquí encontrarás tus pedidos pendientes.</Text>
                <MyMap mapRegion={position} _handleMapRegion={this._handleSaveCoords} markers={[]}/>
                
            </View>
        )
    }
}

// UserViewMap.propTypes = {
//     position: PropTypes.object.isRequired,
//     setLocation: PropTypes.func.isRequired
// }





export default UserViewMap;