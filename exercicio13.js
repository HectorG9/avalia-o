let prompt = require ('prompt-sync')();
valor = parseInt(prompt('Digite um número: '))
p_i = valor % 2
if (p_i === 0){
    console.log('O número é par')
}
else {
    console.log('O número é impar')
}