import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-material-ui';

const VehiculosScreen = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold'}} >Vehículos</Text>
        <Button raised primary text='Atras' onPress={() => navigation.goBack()} style={{ container: { marginTop: 10 }}} />

    </View>
);

export default VehiculosScreen;