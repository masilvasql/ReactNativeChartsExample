import React from 'react'
import { Stack, Router, Scene } from 'react-native-router-flux'
import MenuPrincipal from './views/MenuPrincipal'
import GraficoLinha from './views/GraficoLinha'
import GraficoProgresso from './views/GraficoProgresso'
import GraficoBarras from './views/GraficoBarras'
import GraficoPizza from './views/GraficoPizza'
import GraficoBarrasSobrepostas from './views/GraficoBarrasSobrepostas'
import GraficoHs from './views/GraficoHs'


const Rotas = ()=>(
    <Router>
        <Stack hideNavBar={true} >
            <Scene key='menuPrincipal' component={MenuPrincipal} initial/>
            <Scene key='graficoLinha' component={GraficoLinha}  />
            <Scene key ='graficoProgresso' component ={GraficoProgresso}/>
            <Scene key ='graficoBarras' component ={GraficoBarras}/>
            <Scene key ='graficoPizza' component ={GraficoPizza}/>
            <Scene key ='graficoBarrasSobrepostas' component ={GraficoBarrasSobrepostas}/>
            <Scene key ='graficoHs' component ={GraficoHs}/>
        </Stack>
    </Router>
)

export default Rotas