import React from 'react'
import {Dimensions, ScrollView, View} from 'react-native'
import {BarChart} from 'react-native-chart-kit'

export default props=>(
    <ScrollView horizontal style={{flex:1}}>
    <BarChart
    style={{
        marginTop: 25,
        borderRadius: 16
      }}
        data={props.data}
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').height}
        yAxisLabel={'$'}
        chartConfig={estiloGrafico}
    />
    </ScrollView>
   
)

const estiloGrafico = estiloG = {
   
    backgroundGradientFrom: '#273c75',
    backgroundGradientTo: '#192a56',
    color: (opacity = 0.2) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  }