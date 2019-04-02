import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import GrPizza from '../components/GPizza'

export default class GraficoPizza extends Component {

    constructor() {
        super()
        this.state = {
            data: [
                { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                { name: 'New York', population: 8538000, color: '#e1b12c', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
            ],
            orientation: ''
        }
    }

    componentDidMount() {
        this.getOrientation();

        Dimensions.addEventListener('change', () => {
            this.getOrientation();
        });
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
            <View ref='rootView' style={estilo.estilo}>
                <GrPizza
                    data={this.state.data}
                />
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    container: {
        flex: 1
    }
})
