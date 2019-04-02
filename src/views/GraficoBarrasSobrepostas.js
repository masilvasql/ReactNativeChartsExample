import React, { Component } from 'react'
import { Text, View } from 'react-native'
import StackedBarCharts from '../components/GStacked'

export default class GraficoBarrasSobrepostas extends Component {

    constructor(){
        super()
        this.state = {
            data : [
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
                    month: 'Junho',
                    programado: 500,
                    realizado: 650,
                },
                {
                    month: 'Julho',
                    programado: 1000,
                    realizado: 1200,
                },
            ] 
        }
    }


  render() {
    return (
      <View>
        <StackedBarCharts data={this.state.data}/>
      </View>
    )
  }
}
