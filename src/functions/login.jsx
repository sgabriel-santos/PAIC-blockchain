export const gera_id = () => {
    const size = 5;
    const randomized = Math.ceil(Math.random() * Math.pow(10,size));//Cria um número aleatório do tamanho definido em size.
    var digito = Math.ceil(Math.log(randomized));//Cria o dígito verificador inicial
    while(digito >= 100){//Pega o digito inicial e vai refinando até ele ficar menor que 100
        digito = Math.ceil(Math.log(digito));
    }

    const id = randomized + '-' + digito;//Cria o ID
    console.log(id)
    return id;
}