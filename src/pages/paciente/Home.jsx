import React from 'react'
import {transformaEmMili, getTime, getDate} from '../../functions/home.jsx'
import Form from '../../componentes/FormHome.jsx'
import Info from '../../componentes/Information.jsx'
import Load from '../../componentes/Load'

export default class Home extends React.Component{

    constructor(props){
        super(props);
        const date = new Date()
        this.state = {sistole: '', diastole:'', time: getTime(), date: getDate(),
          waitingConfirmation:false, loading:false}; //*********************//
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addPressao(sistole,diastole,date){
        this.props.user.contract.methods.addPressure(sistole,diastole,date).send({from:this.props.user.myData.account})
        .once('transactionHash', (hash) => { 
          this.setState({waitingConfirmation:false,loading:true})
        })
        .on('confirmation', (confNumber) => { 
          if(confNumber === 1){
            this.props.submitPressure(
              {sistole:this.state.sistole,
                diastole:this.state.diastole,
                date
              })
              this.setState({waitingConfirmation:false, loading:false,
                sistole: '', diastole:'', time: getTime(), date: getDate()}) //*******************//
              window.alert("Pressão cadastrada com sucesso")
          }
        })
        .on('error', (error) => { 
          console.log(error.message, 'error') 
          this.setState({waitingConfirmation:false, loading:false})
          window.alert('Operação Cancelada')
        })
    }
    
    //=================Funções Interação com o formulário======================
    handleInputChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value });
    }
  
    handleSubmit(event) {
      this.setState({waitingConfirmation:true})
      const date = transformaEmMili(this.state.date, this.state.time)
      this.addPressao(this.state.sistole, this.state.diastole, date)
      event.preventDefault();
    }
    //=========================================================================

    choicePage(){
      if(this.state.waitingConfirmation) return <Info text={"Esperando confimação do usuário"}/>
      if(this.state.loading){
        return <Load text={`Um momento, estamos adicionando os seus dados. Este processo
             pode demorar um pouco. Porém, garantimos a segurança de seus dados`}/>      
      }
      return  <Form
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                sistole={this.state.sistole}
                diastole={this.state.diastole}
                date={this.state.date}
                time={this.state.time}/>
    }
    
    render(){
        return this.choicePage()
    }
}