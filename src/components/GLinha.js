import React from 'react'
import { Text, View, Dimensions, ScrollView, StyleSheet } from 'react-native'
import { LineChart } from 'react-native-chart-kit'


export default props => (
  <ScrollView style={{ flex: 1 }} horizontal>
    <View style={estilo.container}>
      <LineChart
        data={{
          labels: props.labels,
          datasets: props.data
        }}
        width={Dimensions.get('window').width} 
        height={Dimensions.get('window').height}
        yAxisLabel={'$'}
        chartConfig={estiloGrafico}
        bezier
        style={{
          marginTop:5,
          borderRadius: 16
        }}
      />
    </View>
  </ScrollView>
)


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
  viewText:{
    alignItems:'center',
    backgroundColor:'rgba(0, 184, 148,1.0)',
    marginHorizontal:10,
    borderRadius:15,
    marginTop:5
  },
  titulo:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16
  }
})

const estiloGrafico = estiloG = {
  backgroundColor: '#27ae60',
  backgroundGradientFrom: '#74b9ff',
  backgroundGradientTo: '#00b894',
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  }
}

