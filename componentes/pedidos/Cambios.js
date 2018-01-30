import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import Pedidos from '../pedidos';

const Cambios = ({ navigation, screenProps }) => (
    <Pedidos
        status='cambiando'
        title="Para Cambiar"
        navigation={navigation}
        screenProps={screenProps}
    />
);


export default Cambios;