import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import GrBarras from '../components/GBarras'
import { buscaPedido } from '../functions/sql'

export default class GraficoBarras extends Component {

    constructor() {
        super()
        this.state = {
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ]
                }]
            },
            orientation: '',
            labels:[]
        }
    }

    componentDidMount() {
        this.getOrientation();

        Dimensions.addEventListener('change', () => {
            this.getOrientation();
        });
        this.buscaDados()
    }

    async buscaDados(){
        let result = await buscaPedido()
        console.log(result)
        let arrayLabel = []
        let cont =0
        result.forEach(dados=>{
            arrayLabel.push(dados.descItem)
            cont ++;
            if(cont == result.length){
                this.setState({labels: arrayLabel})
            }
        })
        
    }

    getOrientation = () => {
        if (this.refs.rootView) {
            if (Dimensions.get('window').width < Dimensions.get('window').height) {
                this.setState({ orientation: 'portrait' });
            }
            else {
                this.setState({ orientation: 'landscape' });
            }
        }
    }

    render() {
        return (
            <ScrollView horizontal style={{ flex: 1 }}>
                <View ref='rootView' style={estilo.container}>
                    <GrBarras
                        data={this.state.data}
                    />
                </View>
            </ScrollView>
        )
    }
}

const estilo = StyleSheet.create({
    container: {
        flex: 1
    }
})