'use strict';

import React, {Component} from "react";
import {
    TextInput,
    ActivityIndicator,
    Text,
    View,
    Image,
    StatusBar,
    ListView,
    Animated,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Platform,
    Dimensions,
    NetInfo,
    ProgressViewIOS,
    DeviceEventEmitter
} from "react-native";
import Pedido from "./pedido";
import Api from "../woocommerce/api";
import css from "./styles/style";
import pedido from "./styles/pedidos";
import { ActionButton, Icon, Toolbar, ListItem, Card, Button } from 'react-native-material-ui'
import MyMenu from './menu';

let offset = 0;
let offsetHeader = 100;
let beta = 50;

export default class PedidosScreen extends React.Component {
    constructor(props) {
        super(props);
        this.data = [];
        this.state = {
            page: 1,
            limit: 2,
            isOnline: true,
            isLoading: false,
            finish: false,
            _animatedMenu: new Animated.Value(0),
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => true
            }),
            showMenu: false,
            status: props.status,
            user: props.screenProps.user,
            pos: props.screenProps.pos
        };
        this.renderRow = this.renderRow.bind(this);
    }

    hideMenu() {
        Animated.spring(this.state._animatedMenu, {
            toValue: -120
        }).start();
    }

    showMenu() {
        Animated.spring(this.state._animatedMenu, {
            toValue: 0
        }).start();
    }

    onScroll(event) {
        // console.log('Lanzado evento onScroll');
        let currentOffset = event.nativeEvent.contentOffset.y;
        // console.log('currentOffset',currentOffset);
        if (currentOffset < offsetHeader) {
            return;
        }
        if (Math.abs(offset - currentOffset) <= beta)
            return;

        if (currentOffset > offset) {
            this.hideMenu();
        } else if (currentOffset < offset) {
            this.showMenu()
        }
        offset = currentOffset;
        // console.log('offset',offset);
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        let self = this;
        if (this.state.finish || !this.state.isOnline) {
            return;
        }
        self.setState({isLoading: true});

        Api.get('orders', {
            per_page: this.state.limit,
            page: this.state.page,
            status: this.state.status, //'cambiando' // this.props.status
            // include: ['5708']
        })
        .then(function (data) {
            // console.log(data);
            let info = data.map(item => {
                if (item.meta_data[0].value === self.state.user) {
                    return item
                }
            });
            // console.log(info[0]);
            self.data = self.data.concat(info);
            self.setState({
                page: self.state.page + 1,
                finish: data.length < self.state.limit,
                isLoading: false,
                dataSource: self.getDataSource(self.data)
            });
        });
    }

    getDataSource(pedidos) {
        return this.state.dataSource.cloneWithRows(pedidos);
    }

    onEndReached() {
        this.fetchData();
    }

    renderRow(pedido) {
        // console.log('PEDIDO', pedido);
        return (
            <Pedido pedido={pedido} user={this.state.user} pos={this.state.pos}></Pedido>
        );
    }

    render() {
        console.log('ScreenProps en pedidos:', this.props.screenProps);

        // console.log(this.state.dataSource);
        // console.log(this.data);
        return (
            <View style={pedido.color} >
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <Text>{this.state.user.toUpperCase()}</Text>
                </View>

                <Card style={styles}>
                    <Text style={styles.title} >{this.props.title}</Text>
                </Card>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />

                {
                    this.state.showMenu
                        ? <MyMenu />
                        : <Text/>
                }

                {/*<ScrollView*/}
                    {/*style={{paddingTop: 2}}*/}
                    {/*onScroll={this.onScroll.bind(this)}*/}
                    {/*scrollEventThrottle={30}*/}
                {/*>*/}
                    <ListView
                        onEndReached={this.onEndReached.bind(this)}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}>
                    </ListView>
                {/*</ScrollView>*/}

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: '#3374FF'
    },
    title: {
        color: '#ddd',
        fontSize: 19,
        fontWeight: 'bold',
        padding: 5,
        textAlign: 'center',
    },
    activeTitle: {
        color: 'red',
    },
});