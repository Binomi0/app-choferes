import React, { Component } from 'react';
import { Text, View, Easing, Animated, Image, Button, StyleSheet } from 'react-native';
import { BottomNavigation, Toolbar } from 'react-native-material-ui';

const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

export default class HomeScreen extends Component {

    componentDidMount() {        
        this.geoLocateUser()
    }
    
    geoLocateUser() {  
        let { screenProps, position } = this.props
        let url = 'https://contenedoressatur.es/wp-json/ubicaciones-satur/v1/choferes'

        error = err => {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        }        

        this.watchId = navigator.geolocation.watchPosition(
                (position) => {
                let data = {
                    uid: screenProps,
                    name: 'Adolfo',
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    speed: position.coords.speed
                }
                fetch(url, {
                    'method': 'POST',
                    'headers': new Headers({
                        'Content-Type': 'application/json'
                    }),
                    'body': JSON.stringify(data)
                })
            }, 
            error, 
            geolocationOptions
        );
    }  
    
    componentWillUnmount() {        
        navigator.geolocation.clearWatch(this.watchId)
    }

    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>        
                {/*<Toolbar*/}
                    {/*leftElement="menu"*/}
                    {/*onLeftElementPress={() => this.setState({ showMenu: !this.state.showMenu})}*/}
                    {/*centerElement="SATUR"*/}
                    {/*searchable={{*/}
                        {/*autoFocus: true,*/}
                        {/*placeholder: 'Buscar',*/}
                    {/*}}*/}
                {/*/>*/}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 30 }}>
                    <Image
                        source={{ uri: 'http://contenedoressatur.com/wp-content/uploads/2015/11/logo21.png'}}
                        style={{ width: 245, height: 86, marginBottom: 30 }}
                    />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 30 }} >AREA DEL CHÓFER</Text>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Button title='MAPA' onPress={() => navigation.navigate('Mapa')} /> 
                        <Button title='Ver Pedidos' onPress={() => navigation.navigate('Pedidos')}  />
                        <Button title='Ver Perfil' onPress={() => navigation.navigate('Perfil')} />
                        <Button title='Vehiculos' onPress={() => navigation.navigate('Vehiculos')} />
                    </View>
                    {/*<Button
                        {/*onPress={() => navigation.navigate('Poner')}*/}
                        {/*title="Ver Puestas"*/}
                    {/*/>*/}
                    {/*<Button*/}
                        {/*onPress={() => navigation.navigate('Cambiar')}*/}
                        {/*title="Ver Cambios"*/}
                    {/*/>*/}
                    {/*<Button*/}
                        {/*onPress={() => navigation.navigate('Retirar')}*/}
                        {/*title="Ver Retiradas"*/}
                    {/*/>*/}
                </View>
            </View>
        );
    }
} 