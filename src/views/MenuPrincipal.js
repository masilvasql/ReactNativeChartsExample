import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ListaProdutos from '../views/ListaProdutos'
import { criaBancoDeDados } from '../functions/sql'


export default class MenuPrincipal extends Component {

  componentDidMount(){
    criaBancoDeDados()
  }

  render() {
    return (
      <View style={{ marginTop: 25, flex: 1 }}>
      
        <View>
          <View style={{ marginTop: 15 }}>
            <Button title='Gráfico Linha' onPress={() => Actions.graficoLinha()} />
          </View>
          <View style={{ marginTop: 15 }}>
            <Button title='Gráfico Progresso' onPress={() => Actions.graficoProgresso()} />
          </View>

          <View style={{ marginTop: 15 }}>
            <Button title='Gráfico Barras' onPress={() => Actions.graficoBarras()} />
          </View>

          <View style={{ marginTop: 15 }}>
            <Button title='Gráfico Pizza' onPress={() => Actions.graficoPizza()} />
          </View>

          <View style={{ marginTop: 15 }}>
            <Button title='Gráfico Barras Sobrepostas' onPress={() => Actions.graficoBarrasSobrepostas()} />
          </View>

        </View>
        <View style={{ flex: 1 }}>
          <ListaProdutos />
        </View>
      </View>
    )
  }
}

