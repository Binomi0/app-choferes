'use strict';

import React, {Component} from "react";
import PropTypes from 'prop-types'
import {Text, View, TouchableOpacity, Image, } from "react-native";
import css from "./styles/pedidos";
import style from "./styles/style";
import { Card,
    Button,
    Subheader, ListItem } from 'react-native-material-ui';



export default class PedidoItem extends Component {

    state = {
        showDetails: false,
        showButtons: false
    };

    componentWillMount() {
        let {pedidos} = this.props;
        let horaentrega, fechaEntrega, producto, pedido, receptor, direccion, notas;
        // pedidos.map(pedidos => {
        //
        // })
    }

    presionarPedido= (e) => {
        // console.log('PEDIDO PRESIONADO', e.target)
        this.setState({ show: !this.state.show });
    };
    
    longPress = (e) => {
        // console.log('PRESIONADO mas de 1 segundo', e.target)
    };
    onPressLearnMore = () => {

    };

    showStatusButton (status) {
        // console.log(status);
         return <View>
             <Button
                 // title={status}
                 // color="#841584"
                 // accessibilityLabel={status}
                 raised
                 primary
                 text={status}
                 style={{ container: { padding: 30, width: 120, flex: 1, justifyContent: 'center' } }}
             />
         </View>
    };


    render() {
        console.log('PROPS PEDIDO:', this.props);
        // const { primaryColor } = this.context.uiTheme.palette;
        // const horarioEntrega = ['Primera Hora', 'Mañana', 'Mediodia', 'Tarde', 'Sin especificar'];
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let { pedido, user, pos } = this.props;
        // console.log('THIS.PROPS.PEDIDO', typeof pedido);
        // let entregarDia = pedido.meta_data.filter(value => value.key === 'fecha_entrega');



        // if (entregarDia.length <= 0) {
        //     entregarDia = pedido.date_created_gmt.toLocaleString('es-ES', options);
        // }
        // console.log(typeof entregarDia);
        // let entregarHora,
        // if (pedido.meta_data.length <= 0) {
        //     console.log('El pedido no tiene metadatos');
        //     entregarHora = horarioEntrega[4]
        //     entregarDia = horarioEntrega[4] + 'pedido el: ' + pedido.date_created.toLocaleDateString(es-ES);
        // } else {
        //     console.log('El pedido tiene estos metadatos', pedido.meta_data);
        //     entregarDia = pedido.meta_data.filter(detalles => {
        //         if (detalles.key === 'fecha_entrega') {
        //             return detalles.value
        //         }
        //     });
        //     entregarHora = pedido.meta_data.filter(detalles => {
        //         if (detalles.key === 'hora_entrega') {
        //             return detalles.value
        //         }
        //     });
        //     console.log(entregarHora);
        //     console.log(entregarDia);
        // }
        //
        // let titulo = entregarDia + ' (' + horarioEntrega[entregarHora] + ')';

        if (!pedido) {
            return (
                <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>No hay pedidos pendientes para {user}.</Text>
                </View>
            )
        } else {
            let entregarDia = new Date(pedido.date_created) || 'Sin especificar';
            return (
                <View>
                    {/*<TouchableOpacity */}
                    {/*style={[css.cards]}*/}
                    {/*onPress={this.presionarPedido}*/}
                    {/*onLongPress={this.longPress}*/}
                    {/*delayLongPress={1000}*/}
                    {/*>*/}
                    {/* <Card> */}

                    <ListItem
                        divider
                        numberOfLines='dynamic'
                        centerElement={{
                            primaryText: `#${pedido.id} ${pedido.billing.first_name || "Desconocido"}`,
                            secondaryText: `Ubicación: ${pedido.shipping.address_1} ${pedido.shipping.address_2}`,
                            tertiaryText: entregarDia.toLocaleString('es-ES', options)
                            // tertiaryText: pedido.shipping.address_1 + ' (' + pedido.shipping.city + ')'

                        }}
                        onPress={() => this.setState({ showDetails: !this.state.showDetails})}
                        onLongPress={() => this.setState({ showButtons: !this.state.showButtons})}
                    />
                    {/*<Text style={css.productName}>#{pedido.id} <Text style={css.detailDesc}>{pedido.line_items[0].name}</Text></Text>*/}
                    {/*<Text>{entregarDia}</Text>*/}

                    {
                        this.state.showDetails
                            ? <View>
                            <Text style={css.detailDesc}>{pedido.line_items[0].name}</Text>
                            <Text style={css.detailDesc}>{pedido.customer_note}</Text>
                        </View>
                            : <Text/>
                    }
                    {
                        this.state.showButtons
                            ? <View style={{ marginBottom: 10 }} >
                            {
                                pedido.status === 'retirando'
                                    ? this.showStatusButton('Retirado')
                                    : pedido.status === 'cambiando'
                                    ? this.showStatusButton('Cambiado')
                                    : pedido.status === 'processing'
                                        ? this.showStatusButton('Puesto')
                                        : <Text/>
                            }
                        </View>
                            : <Text/>
                    }
                    {/* </Card> */}
                    {/*</TouchableOpacity>*/}
                </View>
            );
        }


	}
}


