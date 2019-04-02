import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class MenuPrincipal extends Component {
  render() {
    return (
      <View style={{marginTop:25}}>
        <View style={{marginTop:15}}>
          <Button title='Gráfico Linha' onPress={()=> Actions.graficoLinha()}/>  
        </View>
        <View style={{marginTop:15}}>
          <Button title='Gráfico Progresso' onPress={()=> Actions.graficoProgresso()}/>  
        </View>

        <View style={{marginTop:15}}>
          <Button title='Gráfico Barras' onPress={()=> Actions.graficoBarras()}/>  
        </View>

        <View style={{marginTop:15}}>
          <Button title='Gráfico Pizza' onPress={()=> Actions.graficoPizza()}/>  
        </View>

        <View style={{marginTop:15}}>
          <Button title='Gráfico Barras Sobrepostas' onPress={()=> Actions.graficoBarrasSobrepostas()}/>  
        </View>       
        
      </View>
    )
  }
}
