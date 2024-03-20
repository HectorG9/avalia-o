let prompt = require(('prompt-sync'))();
maças = parseInt(prompt('quanta maçãs quer comprar? '));
if (maças < 12){
    console.log ('o total é: R$', 0.30 * maças);
}
else {
    console.log ('o total é: R$', 0.25 * maças);
}