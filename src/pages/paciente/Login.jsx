import React from 'react'
import FormLogin from '../../componentes/FormLogin'
import {gera_id} from '../../functions/login'
import Info from '../../componentes/Information.jsx'
import Load from '../../componentes/Load'
import '../../styles/Login.css'

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {name: '', waitingConfirmation:false, loading:false}
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    cadastrar(name,id){
        this.props.user.contract.methods.register(name,id).send({from:this.props.user.myData.account})
        .once('transactionHash', (hash) => { 
            this.setState({waitingConfirmation:false,loading:true})
        })
        .on('confirmation', (confNumber) => { 
            if(confNumber === 1){
                this.setState({waitingConfirmation:false, loading:false}) //*************//
                window.alert("Login efetuado com sucesso com sucesso")
                document.location.reload()
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

        this.setState({
          [name]: value
        });
    }
  
    handleSubmit(event) {
        this.setState({waitingConfirmation:true})
        const id =  gera_id()
        this.cadastrar(this.state.name, id);
        event.preventDefault();
    }

    choicePage(){
        if(this.state.waitingConfirmation) return  <Info text={"Esperando confimação do usuário"}/>
        if(this.state.loading){
            return <Load text={`Um momento, estamos adicionando os seus dados. Este processo
                         pode demorar um pouco. Porém, garantimos a segurança de seus dados`}/>
        }
        return <FormLogin
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}
                    name={this.state.name}/>
    }

    trocarUser(){
        this.props.user.contract.methods.trocaUser().send({from:this.props.user.myData.account})
        .once('transactionHash', (hash) => { 
            this.setState({waitingConfirmation:false,loading:true})
        })
        .on('confirmation', (confNumber) => { 
            if(confNumber === 1){
                this.setState({waitingConfirmation:false, loading:false}) //*******************//
                window.alert("Usuário trocado com sucesso!")
                document.location.reload()
            }
        })
        .on('error', (error) => { 
            console.log(error.message, 'error') 
            this.setState({waitingConfirmation:false, loading:false})
            window.alert('Operação Cancelada')
        })
    }

    render() {
        return(
            <div>
                {this.choicePage()}
                <button className="buttonTroca" onClick={() => this.trocarUser()}>Está aqui só para fins de teste</button>
            </div>
        ) 
    }
}