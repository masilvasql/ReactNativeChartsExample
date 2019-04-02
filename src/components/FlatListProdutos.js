import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements';

export default class FlatListProdutos extends Component {

    constructor(props) {
        super(props)
    }

    itensLista = ({ item }) => (
        <TouchableOpacity>
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
            <FlatList
                data={this.props.data}
                renderItem={this.itensLista}
            />
        )
    }
}
