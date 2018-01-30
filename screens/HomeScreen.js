import React, { Component } from 'react';
import { Text, View, Easing, Animated, Image, Button } from 'react-native';
import { BottomNavigation, Toolbar } from 'react-native-material-ui';

export default class HomeScreen extends Component {
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
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={{ uri: 'http://contenedoressatur.com/wp-content/uploads/2015/11/logo21.png'}}
                        style={{ width: 245, height: 86, marginBottom: 40 }}
                    />
                    <Text style={{ fontSize: 18, fontWeight: 'bold'}} >AREA DEL CHÓFER</Text>
                    <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button title='Ver Pedidos' onPress={() => navigation.navigate('Pedidos')} style={{ container: { marginTop: 10 }}} />
                        <Button title='Ver Perfil' onPress={() => navigation.navigate('Perfil')} style={{ container: { marginTop: 10 }}} />
                        <Button title='Vehiculos' onPress={() => navigation.navigate('Vehiculos')} style={{ container: { marginTop: 10 }}} />
                        <Button title='Horarios' onPress={() => navigation.navigate('Horarios')} style={{ container: { marginTop: 10 }}} /> 
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