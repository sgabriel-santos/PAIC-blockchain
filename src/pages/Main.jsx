import React from 'react'
import Web3 from 'web3'
import '../styles/Main.css'
import {transformToObject, podePage} from '../functions/main'
import Contract from '../blockchain/abis/Paciente.json'
import Paciente from '../users/Paciente'
import Medico from '../users/Medico'
import Login from '../pages/paciente/Login'
import Load from '../componentes/Load'

export default class NameForm extends React.Component {
  
  //===================== Conexão com a blockchain==================

  async componentDidMount() {
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
    const accounts = await web3.eth.getAccounts()
    const networkId = await web3.eth.net.getId()
    const networkData = Contract.networks[networkId]

    // window.history.pushState('','blockchain-test',"/");

    if(networkData) { 
      const contract = await web3.eth.Contract(Contract.abi, networkData.address)
      var myData = await contract.methods.getUser(accounts[0]).call()
      const pressures = await contract.methods.getPressure(accounts[0]).call()
      const myPressures = { sistole:pressures[0], diastole:pressures[1], date:pressures[2] }
      myData = transformToObject(myData,myPressures,accounts[0])
    
      if(myData.name === "") this.setState({ cadastrado: false})

      if(myData.isDoctor) this.setState({ paciente: false})
      if(!podePage(myData.isDoctor)) window.history.pushState('','blockchain-test',"/");

      var patientData = [], patientId = {}
      
      for(var i=0; i<myData.pacientes.length;i++){
        var patient = await contract.methods.getUser(myData.pacientes[i]).call()
        const pressure = await contract.methods.getPressure(myData.pacientes[i]).call()
        const pressures = { sistole:pressure[0], diastole:pressure[1], date:pressure[2] }
        patient = transformToObject(patient, pressures, myData.pacientes[i])
        patientData.push(patient)
        patientId[patient.id] = patient
      }
      
      const user = {contract, myData, patientData, patientId}
      console.log(user)
      this.setState({user, loading: false})
      
    } else {
      window.alert('Patient contract not deployed to detected network.')
    }
  }

  //=========================================================================

  state = {loading:true, paciente:true, cadastrado:true};
  
  choicePage(){
    if(this.state.loading) return <Load title={`Um momento!`} text={`Estamos carregando os seus dados`}/>
    if(!this.state.cadastrado) return <Login user={this.state.user}/>      
    if(this.state.paciente){
      return <Paciente user={this.state.user} />
    }else{
      return <Medico user={this.state.user} />
    }
  }

  render() {
    return this.choicePage()
  }
}