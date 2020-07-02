import React from 'react'
import {Link} from 'react-router-dom'
import Info from '../../componentes/Information'
import FormPatients from '../../componentes/FormPatients'
import Table from '../../componentes/Table'


export default class Pacientes extends React.Component {
    constructor(props){
        super(props)
        this.state = {id: ''}
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addPatient(id){
        this.props.user.contract.methods.addPatient(id).send({from:this.props.user.myData.account})
        .once('transactionHash', (hash) => { 
            this.setState({waitingConfirmation:false,loading:true})
          })
          .on('confirmation', (confNumber) => { 
            if(confNumber === 1){
            //   this.props.submitPressure(
            //     {sistole:this.state.sistole,
            //       diastole:this.state.diastole,
            //       date
            //     })
                this.setState({waitingConfirmation:false, loading:false, id:''}) //*******************//
                window.alert("Patient adicionado com sucesso")
            }
          })
          .on('error', (error) => { 
            console.log(error.message, 'error') 
            this.setState({waitingConfirmation:false, loading:false})
            window.alert('Operação Cancelada')
          })
    }

    handleInputChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value });
    }
  
    handleSubmit(event) {
      this.setState({waitingConfirmation:true})
      this.addPatient(this.state.id)
      event.preventDefault();
    }

    render(){
        return(
            <div>
                <Info 
                title='Adicione e consulte seus pacientes aqui!'
                text='Aqui você poderá ver todos os pacientes que você cadastrou. Caso queira adicionar um novo paciente
                basta informar o id correspondente a ele'/>
                <FormPatients
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}/>
                <Table pacientes={this.props.user.patientData}/>
                
            </div>
        )
    }
}