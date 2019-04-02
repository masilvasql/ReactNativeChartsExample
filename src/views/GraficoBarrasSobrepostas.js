import React, { Component } from 'react'
import { Text, View } from 'react-native'
import StackedBarCharts from '../components/GStacked'

export default class GraficoBarrasSobrepostas extends Component {

  constructor() {
    super()
    this.state = {
      data: [
        {
          month: 'Janeiro',
          programado: 384,
          realizado: 400,

        },
        {
          month: 'Fevereiro',
          programado: 384,
          realizado: 400,

        },
        {
          month: 'Março',
          programado: 384,
          realizado: 400,

        },
        {
          month: 'Abril',
          programado: 400,
          realizado: 310,
        },
        {
          month: 'Maio',
          programado: 400,
          realizado: 310,
        },
        {
          month: 'Junho',
          programado: 500,
          realizado: 650,
        },
        {
          month: 'Julho',
          programado: 1000,
          realizado: 1200,
        },
        {
          month: 'Agosto',
          programado: 250,
          realizado: 400,
        },
        {
          month: 'Setembro',
          programado: 300,
          realizado: 150,
        },
        {
          month: 'Outubro',
          programado: 250,
          realizado: 333,
        },
        {
          month: 'Novembro',
          programado: 120,
          realizado: 240,
        },
        {
          month: 'Dezembro',
          programado: 300,
          realizado: 50,
        },
        
      ]
    }
  }


  render() {
    return (
      <View style={{flex:1}}>
        <StackedBarCharts data={this.state.data} />
      </View>
    )
  }
}
