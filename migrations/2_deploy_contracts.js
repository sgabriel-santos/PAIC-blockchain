const Marketplace = artifacts.require("Marketplace");
const Paciente = artifacts.require("Paciente");

module.exports = function(deployer) {
  deployer.deploy(Marketplace);
  deployer.deploy(Paciente);
};
