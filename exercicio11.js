let prompt = require('prompt-sync')();
senha = parseInt(prompt ('digite a senha: '));
if (senha != 1234){
    console.log ('acesso negado')
}
else{
    console.log ('acesso permitido')
}