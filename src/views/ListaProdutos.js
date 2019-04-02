import React, { Component } from 'react'
import { Text, View } from 'react-native'
import FlatListProdutos from '../components/FlatListProdutos'

export default class ListaProdutos extends Component {

    constructor(){
        super()
        this.state ={
            data:[
                {
                    codigo:'1',
                    descricao:'Laranja',
                    valor:2.50,
                },
                {
                    codigo:'2',
                    descricao:'Maçã',
                    valor:1.25,
                },
                {
                    codigo:'3',
                    descricao:'Abacaxi',
                    valor:5,
                },
                {
                    codigo:'4',
                    descricao:'Banana',
                    valor:2.25,
                },
                {
                    codigo:'5',
                    descricao:'Uva',
                    valor:6.25,
                },
            ]
        }
    }

  render() {
    return (

        <FlatListProdutos data ={this.state.data}/>

    )
  }
}