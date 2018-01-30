import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import Pedidos from '../pedidos';

const Puestas = ({ navigation, screenProps }) => (
    <Pedidos
        status='processing'
        title="Para Poner"
        navigation={navigation}
        screenProps={screenProps}
    />
);
export default Puestas;