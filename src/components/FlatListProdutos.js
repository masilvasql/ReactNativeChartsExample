import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements';
import ModalAddItem from './ModalAddItem'

export default class FlatListProdutos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible:false,
            dadosProd:{}
        }
    }

    itensLista = ({ item }) => (
        <TouchableOpacity onPress={()=> this.setState({dadosProd:item, visible:true})}>
            <Card title={'Código: ' + item.codigo}>
                <View>
                    <Text>Desc: {item.descricao}</Text>
                    <Text>Valor: {item.valor}</Text>
                </View>
            </Card>
        </TouchableOpacity>
    )

    render() {
        return (
            <View>
            <ModalAddItem
                close = {()=> this.setState({visible:false})}
                visible={this.state.visible}
                data={this.state.dadosProd}
            />
            
            <FlatList
                data={this.props.data}
                renderItem={this.itensLista}
            />
            </View>
        )
    }
}
