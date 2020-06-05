import React from 'react'
import { Line } from 'react-chartjs-2'

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
                        data: sistole
                        },
                        {
                        label:'Sistole',
                        backgroundColor: 'blue',
                        borderColor: 'blue',
                        fill:false,
                        data: diastole
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
        const list = props.pressures || []
        const label = []
        const sistole = []
        const diastole = []
        var atualDate = ''
        list.map((dado,key) => {
            sistole.push(dado.sistole)
            diastole.push(dado.diastole)
            if(atualDate !== dado.date){
                label.push([dado.time,dado.date.replace(/-/g,'/')])
                atualDate = dado.date;
            }else label.push(dado.time)
        })

        return plotGraph(sistole,diastole,label)
    }


    return(
        <div>
            {inicializa()}
        </div>
    )
}