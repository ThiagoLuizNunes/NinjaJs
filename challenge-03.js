var myVar = {};

var pessoa = {
  nome: 'Thiago',
  sobrenome: 'Luiz',
  sexo: 'masculino',
  idade: 24,
  altura: 1.75,
  peso: 65,
  andando: false,
  caminhouMetros: 0
};

pessoa.fazerAniversario = function(){
  pessoa.idade++;
}
pessoa.andar = function(m){
  pessoa.caminhouMetros += m;
  pessoa.andando = true;
}
pessoa.parar = function(){
  pessoa.andando = false;
}
pessoa.nomeCompleto = function(){
  return 'Olá! Meu nome é ' + pessoa.nome + " " + pessoa.sobrenome;
}
pessoa.mostrarIdade = function(){
  return 'Olá, eu tenho ' + pessoa.idade + " anos!";
}

pessoa.fazerAniversario();
pessoa.andar(100);

console.log('Idade: ' + pessoa.idade);
console.log('Andou: ' + pessoa.caminhouMetros + ' metros');
console.log('Andando: ' + pessoa.andando);
console.log(pessoa.nomeCompleto());
console.log(pessoa.mostrarIdade());
