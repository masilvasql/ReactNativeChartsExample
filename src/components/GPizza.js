import React from 'react'
import {Dimensions,} from 'react-native'
import { PieChart } from 'react-native-chart-kit'

export default props =>(
    <PieChart
        data={props.data}
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').height}
        chartConfig={estiloGrafico}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
    />
)

const estiloGrafico = estiloG = {

    color: (opacity = 0.2) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  }