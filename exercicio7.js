let prompt = require ('prompt-sync')()
n1 = parseInt (prompt('digite um valor: '));
n2 = parseInt(prompt('digite n2: '))
while (n2 === n1) {
    n2 = parseInt(prompt('Digite um valor diferente do primeiro: '));
}
if (n1 > n2){
    console.log ('n1 é maior: ', n1)
}
else{
    console.log ('n2 é maior: ', n2)
}