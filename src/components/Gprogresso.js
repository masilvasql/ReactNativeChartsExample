import React from 'react'
import { Dimensions } from 'react-native'
import {ProgressChart} from 'react-native-chart-kit'

export default props=>(

    <ProgressChart
        data={props.data}
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').height}
        chartConfig={estiloGrafico}
        
    />
)

const estiloGrafico = estiloG = {
    backgroundColor: '#27ae60',
    backgroundGradientFrom: '#74b9ff',
    backgroundGradientTo: '#00b894',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  }