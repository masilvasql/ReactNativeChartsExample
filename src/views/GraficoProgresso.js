import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import GrProgresso from '../components/Gprogresso'

export default class GraficoProgresso extends React.Component {

    constructor(){
        super()
        this.state = {
            data:[0.2, 0.25, 0.15, 0.3, 0.1],
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
      <View ref="rootView" style={estilo.container}>
        <GrProgresso
            data ={this.state.data}
            height={this.state.orientation}
        />
      </View>
    )
  }
}

const estilo = StyleSheet.create({
    container:{
        flex:1
    }
})
