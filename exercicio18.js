let prompt = require('prompt-sync')();
n1 = parseInt(prompt('digite n1: '));
n2 = parseInt(prompt('digite n2: '));
do {
    i = parseInt(prompt('digite um valor diferente de n2: '));    
    n2 = i
}
while(i === n1);

n3 = parseInt(prompt('digite n3: '));

do {
    j = parseInt(prompt('digite um valor diferente de n3: '));  
    n3 = j
}
while(j === n2 & j === n1);
if (n1> n2 & n1> n3){
    console.log ('n1 é o maior')
}
else if(n2> n1 & n2> n3){
    console.log ('n2 é maior')
} 
else {
    console.log ('n3 é maior')
}