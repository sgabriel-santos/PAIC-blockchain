import React from 'react'
import { Line } from 'react-chartjs-2'
import '../styles/Graph.css'
import {getLabel} from '../functions/graph'
export default props => {

    const plotGraph = (sistole,diastole,label) => {
        return (
            <Line type={'line'}
                data={{
                    labels: label,
                    datasets:[
                        {
                        label:'Diastole',
                        backgroundColor: 'red',
                        borderColor: 'red',
                        fill:false,
                        data: diastole
                        },
                        {
                        label:'Sistole',
                        backgroundColor: 'blue',
                        borderColor: 'blue',
                        fill:false,
                        data: sistole
                        }
                    ]
                }}
                options={{
                responsive: true,
                title:{
                display: true,
                text:'blood pressure',
                fontSize:25
                },
                legend:{
                display:true,
                position:'right'
                },
                tooltips:{
                mode: 'index'
                },
                scales: {
					yAxes: [{
						ticks: {
							min: 0,
							max: 180
						}
					}]
				}
            }}
            />
        )
    }
    const inicializa = () => {
        const list = props.data || []
        const label = getLabel(list.date)
        return plotGraph(list.sistole,list.diastole,label)
    }

    return(
        <div id="graph">
            {inicializa()}
        </div>
    )
}