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
                {
                    codigo:'6',
                    descricao:'Vergamota',
                    valor:1.99,
                },
                {
                    codigo:'7',
                    descricao:'Cereja',
                    valor:9.99,
                },
                {
                    codigo:'8',
                    descricao:'Melancia',
                    valor:20.25,
                },
                {
                    codigo:'9',
                    descricao:'Acerola',
                    valor:10.75,
                },
                {
                    codigo:'10',
                    descricao:'Limão',
                    valor:9.25,
                },
                {
                    codigo:'11',
                    descricao:'Mirtilo',
                    valor:16.25,
                },
                {
                    codigo:'12',
                    descricao:'Amora',
                    valor:12.25,
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