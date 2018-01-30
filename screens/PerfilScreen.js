import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-material-ui';

const PerfilScreen = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold'}} >Pedidos</Text>
        <Button raised primary text='Pedidos' onPress={() => navigation.navigate('Pedidos')} style={{ container: { marginTop: 10 }}} />
        <Button raised accent text={'Mapa'} onPress={() => navigation.navigate('Mapa')} style={{ container: { marginTop: 10 }}} />
        <Button primary text={'Vehículos'} onPress={() => navigation.navigate('Vehiculos')} style={{ container: { marginTop: 10 }}} />

    </View>
);

export default PerfilScreen;