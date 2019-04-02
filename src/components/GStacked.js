import React from 'react'
import { View, FlatList, Text, StyleSheet, ScrollView } from 'react-native'
import { StackedBarChart } from 'react-native-svg-charts'
import { Card, Divider } from 'react-native-elements';

export default class StackedBarCharts extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    componentesFlatList = ({ item }) => (



        <View style={estilo.flatList}>
            <Card containerStyle={{padding:0, margin:0}}>
                <View style={estilo.viewProgReal}>
                    <Text style={{fontWeight:'bold'}}>{item.month} </Text>
                </View>
                <View style={estilo.viewProgReal}>
                    <Text>Programado</Text>
                    <Text>{item.programado}</Text>
                    <Divider style={estilo.divider}/>
                    <Text>Realizado</Text>
                    <Text>{item.realizado}</Text>
                </View>
            </Card>
        </View>


    )


    render() {



        const colors = ['#2980b9', '#3498db']
        const keys = ['programado', 'realizado']

        return (
            <ScrollView >


                <View >
                    <View style={{flex:1}}>

                    
                    <StackedBarChart
                        style={{ height: 200 }}
                        keys={keys}
                        colors={colors}
                        data={this.props.data}
                        showGrid={true}
                        contentInset={{ top: 30 }}

                    />
                    </View>
                    <View style={estilo.viewFlatList}>

                        <View style={{ alignItems: 'center' }}>
                            <Text style={estilo.txtLegenda}>LEGENDA</Text>
                        </View>
                        <FlatList
                            horizontal
                            data={this.props.data}
                            renderItem={this.componentesFlatList}
                        />
                    </View>

                </View>
            </ScrollView>

        )
    }
}

const estilo = StyleSheet.create({
    flatList: {
        width: 115,
        borderRadius: 15,
        marginLeft: 25
    },
    viewFlatList: {
        backgroundColor: '#34495e',
        borderRadius: 15,
        marginTop: 15,
        marginHorizontal: 10,
        marginBottom: 10,
        height:200,
    },
    txtLegenda: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    viewProgReal:{
        alignItems:'center'
    },
    divider:{
        paddingVertical:1,
        borderRadius:10,
        width:150
    }
})