import React from 'react'
import List from './List'
import Form from './Form'
import Graph from './Graph'
import Nav from './Nav'
import Routes from './Routes'
import Web3 from 'web3'
import Paciente from '../abis/Paciente.json'

export default class NameForm extends React.Component {
  //===================== Conexão com a blockchain==================

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    // console.log(accounts)
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
    // console.log(networkId)
    
    const networkData = "0xd5a6cb26cb4002ed88a0a973b64448adedb91ce2"

    if(networkData) { 
      const paciente = web3.eth.Contract(Paciente.abi, networkData)
      this.setState({ paciente })
      console.log(paciente)
      
      const pressureCount = await paciente.methods.pressureCount().call()
      this.setState({ pressureCount })

      for (var i = 0; i < pressureCount; i++) {
        const pressure = await paciente.methods.pressures(i).call()
        const owner = await paciente.methods.owner(i).call()

        if(owner === this.state.account){
          this.setState({
            pressures: [...this.state.pressures, pressure]
          })
        }
      }
      this.setState({ loading: false})
    } else {
      window.alert('Patient contract not deployed to detected network.')
    }
  }

  //=========================================================================
  //===================== Constructor========================================

    constructor(props) {
      super(props);
      this.state = {sistole: '', diastole:'', time:'', date:'', loading:true, pressures: []};
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    //=========================================================================
    //=================Função Que interagem com o Contrat=====================

    addPressao(sistole,diastole,date,time){
      this.setState({loading:true})
      this.state.paciente.methods.addPressao(sistole,diastole,date,time).send({from:this.state.account})
      .then(() =>{
        this.setState({loading:false})
        window.alert('Pressão adicionada com sucesso')
      })
    }
    //=========================================================================
    //=================Funções Interação com o formulário======================
    handleInputChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
          [name]: value
        });
    }
  
    handleSubmit(event) {
      this.addPressao(this.state.sistole, this.state.diastole, this.state.date, this.state.time)
      event.preventDefault();
    }
    //=========================================================================
  
    render() {
      return (
        <div className="container">
          {this.state.loading? <div>Loading...</div>:
            <div>
              <Nav account={this.state.account}/>
              {/* <Routes list={this.state.pressures}/> */}
              <div className='form-group mr-sm-2'>
                <div className="py-5 text-center">
                  <h2>Registre a sua pressão arterial</h2>
                  <p className="lead">Olá, precisamos que você registre diáriamente sua pressão arterial, para que possa ser vista pelo seu médico regularmente. Não se preocupe, seus dados estão seguros!</p>
                </div>
                
                <Form
                  handleInputChange={this.handleInputChange}
                  handleSubmit={this.handleSubmit}
                  sistole={this.state.sistole}
                  diastole={this.state.diastole}
                  date={this.state.date}
                  time={this.state.time}/>

                <Graph pressures={this.state.pressures}/>
                
                <List list={this.state.pressures}/>
              </div>
            </div>
          }
        </div>
      )
    }
  }