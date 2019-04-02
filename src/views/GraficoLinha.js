import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import GrLinha from '../components/GLinha'

export default class GraficoLinha extends Component {

    constructor() {
        super()
        this.state = {
            labelGrLinha: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            dataGrLinha: [{
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
            }],
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
            <View ref="rootView" style={estilo.viewPrincipal} >
                <GrLinha
                    labels={this.state.labelGrLinha}
                    data={this.state.dataGrLinha}
                />
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    viewPrincipal: {
        flex: 1
    }
})