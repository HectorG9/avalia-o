let prompt = require(('prompt-sync'))();
v1 = parseInt(prompt('digite um valor: '));
v2 = parseInt(prompt('digite um segundo valor: '));
while (v2 === v1) {
    v2 = parseInt(prompt('digite um valor válido: '));
}
v3 = parseInt(prompt('digite um terceiro valor: '));
while (v3 === v2 || v3 == v1) {
    v3 = parseInt(prompt('digite um valor válido: '));
}
let valores = [v1, v2, v3]

valores.sort (function(a,b){
    return a - b
})
console.log (valores);