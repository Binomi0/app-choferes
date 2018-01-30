import React from 'react';
import { TabNavigator } from 'react-navigation'
import Puestas from '../componentes/pedidos/Puestas'
import Retiradas from '../componentes/pedidos/Retiradas'
import Cambios from '../componentes/pedidos/Cambios'
import PedidosScreen from '../screens/PedidosScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default TabNavigator({
    Pedidos: {
        screen: PedidosScreen,
        navigationOptions: {
            tabBarLabel: 'Pedidos',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
        screenProps: 'rogelio'
    },
    // Poner: {
    //     screen: Puestas,
    //     navigationOptions: {
    //         tabBarLabel: 'Puestas',
    //         tabBarIcon: ({ tintColor, focused }) => (
    //             <Ionicons
    //                 name={focused ? 'ios-log-in' : 'ios-log-in-outline'}
    //                 size={26}
    //                 style={{ color: tintColor }}
    //             />
    //         ),
    //     },
    //     screenProps: 'rogelio'
    // },
    // Cambiar: {
    //     screen: Cambios,
    //     navigationOptions: {
    //         tabBarLabel: 'Cambios',
    //         tabBarIcon: ({ tintColor, focused }) => (
    //             <Ionicons
    //                 name={focused ? 'ios-refresh' : 'ios-refresh-outline'}
    //                 size={26}
    //                 style={{ color: tintColor }}
    //             />
    //         ),
    //     },
    //     screenProps: 'rogelio'
    // },
    // Retirar: {
    //     screen: Retiradas,
    //     navigationOptions: {
    //         tabBarLabel: 'Retiradas',
    //         tabBarIcon: ({ tintColor, focused }) => (
    //             <Ionicons
    //                 name={focused ? 'ios-log-out' : 'ios-log-out-outline'}
    //                 size={26}
    //                 style={{ color: tintColor }}
    //             />
    //         ),
    //     },
    //     screenProps: 'rogelio'
    // },
},{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    backBehavior: 'none',
    tabBarOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor: '#3374FF'
    }
});