import React from 'react'
import FormDoctor from '../../componentes/FormDoctor'
import Info from '../../componentes/Information'
import Load from '../../componentes/Load'

export default class newDoctor extends React.Component {
    constructor(props){
        super(props)
        this.state = {id: '', waitingConfirmation:false, loading:false} //************//
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    addDoctor(id){
        this.props.user.contract.methods.addDoctor(id).send({from:this.props.user.myData.account})
        .once('transactionHash', (hash) => { 
            this.setState({waitingConfirmation:false,loading:true})
        })
        .on('confirmation', (confNumber) => { 
            if(confNumber === 1){
                this.setState({waitingConfirmation:false, loading:false}) //*******************//
                window.alert("Médico adicionado com sucesso!!")
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
        this.addDoctor(this.state.id);
        event.preventDefault();
    }

    choicePage(){
        if(this.state.waitingConfirmation) return  <Info text={"Esperando confimação do usuário"}/>
        if(this.state.loading){
            return <Load text={`Um momento, estamos processando os dados. Este processo
                         pode demorar um pouco. Porém, garantimos a segurança de seus dados`}/>
        }
        return <FormDoctor
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}
                    id={this.state.id}/>
    }

    render() {
        return this.choicePage()
    }
}