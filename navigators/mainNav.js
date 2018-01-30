import React from 'react';
import { Text, View, Easing, Animated, Image, Button } from 'react-native';
import { LoginScreen, PedidosScreen, PerfilScreen, HomeScreen, VehiculosScreen, MapaScreen } from '../screens';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { BottomNavigation,  Toolbar,  } from 'react-native-material-ui';
import PedidosTabs from './pedidosTabs';

export default MainNav = StackNavigator ({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
                // headerRight: <Button title='Pedidos' onPress={() => console.log(a) } color='#fff'  />,
                // headerRight: <Button title='Pedidos' onPress={() => navigation.navigate('Pedidos') } color='#fff' />,
                title: 'CONTENEDORES SATUR'
            }),
    },
    Pedidos: {
        screen: PedidosTabs,
        navigationOptions: () => ({
            headerRight: <Button title='Pedidos' onPress={(a) => console.log(a) } color='#fff' />,
            title: 'Pedidos'
        })
    },
    Perfil: {
        screen: PerfilScreen,
        navigationOptions: () => ({
            title: 'Perfil'
        })
    },
    Vehiculos: {
        screen: VehiculosScreen,
        navigationOptions: () => ({
            title: 'Vehículos'
        })
    },
    Mapa: {
        screen: MapaScreen,
        navigationOptions: () => ({
            title: 'Mapa'
        })
    }
},{
        initialRouteName : 'Home',
        headerMode: 'screen',
        mode: 'modal',
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#3374FF'
            },
            headerRight: <Button title='Salir' onPress={(a) => console.log(a) } color='#fff'  />,
            gesturesEnabled: false,
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const width = layout.initWidth;
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [width, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateX }] };
            },
        }),
    }
);

/* TODO
*  Dar funcionalidad al boton salir
*/