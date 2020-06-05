pragma solidity >=0.4.21 <0.6.0;

contract Paciente{
    string public name;
    struct Pressure{
        uint8 sistole;
        uint8 diastole;
        string date;
        string time;
    }
    
    mapping(address => bool) public medico;
    mapping(uint8 => Pressure) public pressures;
    mapping(uint8 => address) public owner;
    uint8 public pressureCount;


    constructor() public {
        name = "Seu contrato de pacientes";
    }
    
    modifier permissaoGet(address _paciente){
        require(msg.sender==_paciente || medico[msg.sender], "Você não tem Permissão para acessar este dado");
        _;
    }
    
    modifier permissaoSet(){
        require(!medico[msg.sender],"Você não tem permissão para adicionar dados");
        _;
    }
    
    event addedPressure(
        uint8 pressureCount,
        uint8 sistole,
        uint8 diastole,
        uint8 hora,
        uint8 minuto
        );
    
    function addPressao(uint8 _sistole, uint8 _diastole, string memory _date, string memory _time) public permissaoSet(){
        // requisitos
        require(_sistole > 0 && _diastole > 0);
        
        // adicionar Pressão e atualizar o tamanho da lista de pressões
        
        pressures[pressureCount] = Pressure(_sistole, _diastole, _date, _time);
        owner[pressureCount] = msg.sender;
        pressureCount++;
        
        // emitir um evento
        
        //emit addedPressure(pressureCount,_sistole, _diastole, _hora, _minuto);
    }
}