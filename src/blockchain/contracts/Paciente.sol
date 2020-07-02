pragma solidity >=0.5.0 <=0.6.5;

contract Paciente{
    struct Pressure{
        uint8 sistole;
        uint8 diastole;
        uint256 date;
        address owner;
    }
    
    struct Data{
        string name;
        bool isDoctor;
        string id;
        uint16 myPressureCount;
        address[] patients;
    }
    
    mapping(address => Data) user;
    mapping(string => address) userId;
    mapping(uint256 => Pressure) pressures;
    uint256 pressureCount;
    
    constructor() public {
        user[msg.sender].isDoctor = true;
    }
    
    event addedPressure(uint8 sistole, uint8 diastole, uint256 date);
    event registered(string name, string id);
    event addedPatient(string id, address patient);
    event addedDoctor(string id, address newDoctor);
    
    function addPressure(uint8 _sistole, uint8 _diastole, uint256 _date) public{
        pressures[pressureCount] = Pressure(_sistole, _diastole,_date, msg.sender);
        user[msg.sender].myPressureCount++;
        pressureCount++;
        emit addedPressure(_sistole, _diastole, _date);
    }
    
    function addPatient(string memory _id) public{
        address _user = userId[_id];
        require(user[msg.sender].isDoctor == true, "Você não tem permissão para adicionar pacientes");
        user[msg.sender].patients.push(_user);
        emit addedPatient(_id, _user);
    }
    
    function addDoctor(string memory _id) public{
        address _user = userId[_id];
        require(user[msg.sender].isDoctor == true, "Você não tem permissão para adicionar novos médicos");
        user[_user].isDoctor = true;
        emit addedDoctor(_id, _user);
    }
    
    function register(string memory _name, string memory _id) public{
        user[msg.sender].name = _name;
        user[msg.sender].id = _id;
        userId[_id] = msg.sender;
        emit registered(_name, _id);
    }
    
    function getPressure(address _owner) public view returns(uint8[] memory, uint8[] memory, uint256[] memory){
        uint256 myPressureCount = user[_owner].myPressureCount;
        uint16 current;
        uint8[] memory sistoles = new uint8[](myPressureCount);
        uint8[] memory diastoles = new uint8[](myPressureCount);
        uint256[] memory dates = new uint256[](myPressureCount);
        
        for(uint256 i=0; i<pressureCount;i++){
            if(pressures[i].owner == _owner){
                sistoles[current] = (pressures[i].sistole);
                diastoles[current] = (pressures[i].diastole);
                dates[current] = (pressures[i].date);
                current++;
            }
        }
        return (sistoles,diastoles,dates);
    }
    
    function getPressureCount() public view returns(uint256){
        return pressureCount;
    }
    
    function getUser(address __user) public view returns(string memory, bool, string memory, uint16, address[] memory){
        Data memory _user = user[__user];
        return (_user.name, _user.isDoctor, _user.id, _user.myPressureCount, _user.patients);
    }
    
    function getUserId(string memory _id) public view returns(address){
        return userId[_id];
    }
    
    function trocaUser() public{
        bool isDoctor = user[msg.sender].isDoctor;
        user[msg.sender].isDoctor= !isDoctor;
    }
    
}