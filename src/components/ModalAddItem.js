import React, { Component } from 'react'
import { Text, View, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Card, Input, Button, Icon } from 'react-native-elements';
import moment from 'moment'
import { adicionaPedido } from '../functions/sql'

export default class ModalAddItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            qtde: 1,
            valor: '',
            desconto: 0,
            codigo: '',
            descricao: '',
            dataPedido: moment().format('DD/MM/Y'),
            numPedido:''
        }
    }

    componentWillReceiveProps(props) {

        this.setState({
            qtde: 1,
            valor: props.data.valor,
            desconto: 0,
            codigo: props.data.codigo,
            descricao: props.data.descricao,
            valorOriginal: props.data.valor,
            dataPedido: moment().format('DD/MM/Y'),
            numPedido:'',
            
        })

    }

    render() {
        return (
            <Modal onRequestClose={this.props.close} visible={this.props.visible} transparent animationType='fade'>
                <TouchableWithoutFeedback onPress={this.props.close}>
                    <View style={estilo.offset} />
                </TouchableWithoutFeedback>
                <View style={estilo.viewCard}>
                    <Card title={this.state.codigo + ' - ' + this.state.descricao} containerStyle={estilo.containerCard}>
                        <View style={estilo.viewData}>
                            <Text>Data Pedido: {this.state.dataPedido}</Text>
    
                                <Input
                                    autoFocus={true}
                                    placeholder='Numero do Pedido'
                                    onChangeText={(numPedido)=> this.setState({numPedido}) }
                                    onSubmitEditing={() => this.qtdInput.focus()}
                                />
                           
                        </View>
                        <View>
                            <Text>Qtde:</Text>
                            <Input
                                value={this.state.qtde}
                                ref={ref=> this.qtdInput = ref}
                                placeholder={`${this.state.qtde}`}
                                onChangeText={(qtde) => this.setState({ qtde: qtde.replace(',', '.') })}
                                onSubmitEditing={() => this.valorInput.focus()}
                            />
                        </View>
                        <View>
                            <Text>Valor:</Text>
                            <Input
                                ref={ref => this.valorInput = ref}
                                placeholder='Valor'
                                value={`${this.state.valor}`}
                                onChangeText={(valor) => this.setState({ valor })}
                                onSubmitEditing={() => this.descontoInput.focus()}
                            />
                        </View>
                        <View>
                            <Text>Desc:</Text>
                            <Input
                                ref={ref => this.descontoInput = ref}
                                placeholder='Desconto'
                                onChangeText={(desconto) => this.setState({ desconto: desconto.replace(',', '.') })}
                                onSubmitEditing={() => Keyboard.dismiss}
                            />
                        </View>
                        <View style={estilo.viewBtn}>
                            <Button 
                                raised 
                                title='Adicionar' 
                                buttonStyle={estilo.btnAdicionar} 
                                onPress={()=> adicionaPedido(
                                    this.state.numPedido, 
                                    this.state.dataPedido, 
                                    this.state.codigo,
                                    this.state.descricao,
                                    this.state.qtde,
                                    this.state.valor,
                                    this.state.valor - this.state.desconto,
                                    this.state.desconto
                                )}
                            />
                            <Button raised title='Cancelar' buttonStyle={estilo.btnRemover} onPress={this.props.close} />
                        </View>
                    </Card>
                </View>

                <TouchableWithoutFeedback onPress={this.props.close}>
                    <View style={estilo.offset} />
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const estilo = StyleSheet.create({
    offset: {
        flex: 1,
        backgroundColor: 'rgba(52, 73, 94,0.8)'
    },
    viewBtn: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnAdicionar: {
        backgroundColor: 'green'
    },
    btnRemover: {
        backgroundColor: 'tomato'
    },
    containerCard: {
        marginVertical: 0,
        borderRadius: 15
    },
    viewCard: {
        backgroundColor: 'rgba(52, 73, 94,0.8)'
    },
    viewData:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})