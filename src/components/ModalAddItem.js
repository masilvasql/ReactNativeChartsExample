import React, { Component } from 'react'
import { Text, View, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Card, Input } from 'react-native-elements';


export default class ModalAddItem extends Component {

    constructor(){
        super()
        this.state ={
            qtde:1,
            valor:0,
            desconto:0,
            vlUnitComDesconto:0
        }
    }
    
    render() {
        return (
            <Modal>
                <TouchableWithoutFeedback>
                    <View style={estilo.offset} />
                </TouchableWithoutFeedback>

                <Card title={this.props.codigo +' - '+this.props.descItem}>
                <View>
                    <Text>Qtde:</Text>
                    <Input
                        onFocus={true}
                        placeholder='Qtde'
                        value={this.state.qtde}
                        onChangeText={(qtde)=> this.setState({qtde})}
                        onSubmitEditing={()=> this.valorInput.focus()}
                    />
                </View>
                <View>
                    <Text>Valor:</Text>
                    <Input
                        ref={ref=> this.valorInput = ref}
                        placeholder='Qtde'
                        value={this.state.qtde}
                        onChangeText={(valor)=> this.setState({valor})}
                        onSubmitEditing={()=> this.valorInput.focus()}
                    />
                </View>
                <View>
                    <Text>Desc:</Text>
                    <Input
                        ref={ref=> this.valorInput = ref}
                        placeholder='Qtde'
                        value={this.state.qtde}
                        onChangeText={(valor)=> this.setState({valor})}
                        onSubmitEditing={()=> this.valorInput.focus()}
                    />
                </View>
                </Card>
                

                <TouchableWithoutFeedback>
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
    }
})