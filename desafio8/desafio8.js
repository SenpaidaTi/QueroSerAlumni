
var dados = 'Nome: Donny-hans, cfp: 071.580.023-06, Endereco: Rua Manoel Borjes, 8, Bairro, Cidade, UF';



var expressao  = new RegExp('(\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2})', 'g');

var resultado = expressao.exec(dados);
console.log(resultado[0]);