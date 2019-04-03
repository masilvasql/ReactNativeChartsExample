import React from 'react'
import { View, FlatList, Text, StyleSheet, ScrollView } from 'react-native'
import { StackedBarChart, Grid, } from 'react-native-svg-charts'
import { Card, Divider } from 'react-native-elements';

export default class StackedBarCharts extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    componentesFlatList = ({ item }) => (
        <View style={estilo.flatList}>
            <Card containerStyle={{ padding: 0, margin: 0, borderRadius:15 }}>
                <View style={estilo.viewProgReal}>
                    <Text>{item.descItem}</Text>
                    <Divider style={estilo.divider} />
                    <Text>Prog.</Text>
                    <Text>{item.valorProgramado}</Text>
                    <Divider style={estilo.divider} />
                    <Text>Vendido</Text>
                    <Text>{item.qtdeItem}</Text>

                </View>
            </Card>
        </View>
    )

    render() {
        const colors = ['#7efff5', '#17c0eb']
        const keys = ['qtdeItem', 'valorProgramado']
        return (

            <ScrollView >
                <View style={this.props.data.length <= 6 ? { alignItems: 'center', flex: 1, backgroundColor: '#1e272e' } : { flex: 1, backgroundColor: '#1e272e' }}>
                    <ScrollView horizontal >
                        <View style={this.props.data.length <= 6 ? { alignItems: 'center' } : null}>
                            <StackedBarChart
                            
                                style={{

                                    height: 215,
                                    width: this.props.data.length > 6 && this.props.data.length < 7
                                        ?
                                        652
                                        :
                                        this.props.data.length > 4 && this.props.data.length < 7
                                            ?
                                            562
                                            :
                                            this.props.data.length == 7
                                                ?
                                                652
                                                :
                                                this.props.data.length > 7 && this.props.data.length < 9
                                                    ?
                                                    742
                                                    :
                                                    this.props.data.length == 9
                                                        ?
                                                        840
                                                        :
                                                        this.props.data.length == 10
                                                            ?
                                                            930
                                                            :
                                                            this.props.data.length == 11
                                                                ?
                                                                1020
                                                                :
                                                                this.props.data.length == 12
                                                                    ?
                                                                    1120
                                                                    :
                                                                    368
                                }}
                                keys={(keys)}
                                colors={colors}
                                data={this.props.data}
                                contentInset={{ top: 30 }}
                            >
                                <Grid/>
                            </StackedBarChart>
                            <View>
                                <View style={{ alignItems: 'center', backgroundColor: '#0abde3', borderRadius: 15, marginTop: 10 }}>
                                    <Text style={estilo.txtLegenda}>LEGENDA</Text>
                                </View>
                                <View style={{ marginTop: 10}}>
                                    <FlatList
                                        horizontal
                                        data={this.props.data}
                                        renderItem={this.componentesFlatList}
                                    />
                                </View>

                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>

        )
    }
}

const estilo = StyleSheet.create({
    flatList: {
        width: 88,
        borderRadius: 25,
        marginLeft: 5,
        marginBottom:10


    },
    viewFlatList: {
        backgroundColor: '#34495e',
        borderRadius: 15,
        marginTop: 15,
        marginHorizontal: 10,

        height: 200,
    },
    txtLegenda: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    viewProgReal: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    divider: {
        paddingVertical: 1.5,
        borderRadius: 10,
        width: 78,
        backgroundColor: '#2c3e50'
    }
})