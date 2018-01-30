import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import Pedidos from '../pedidos';

const Retiradas = ({ navigation, screenProps }) => (
    <Pedidos
        status='retirando'
        title="Para Retirar"
        navigation={navigation}
        screenProps={screenProps}
    />
);

export default Retiradas;