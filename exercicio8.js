let prompt = require ('prompt-sync')()
nasc = parseInt (prompt('Data de nascimento: '));
idade = 2024 - nasc
console.log('A pessoa que nasceu em ', nasc + ' tem ', idade, ' anos')
if (idade >= 16){
    console.log('A pessoa pode votar!')
}
else {
    console.log('Você ainda não tem idade o suficiente para votar!')
}