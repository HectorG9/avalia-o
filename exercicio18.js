let prompt = require('prompt-sync')();
n1 = parseInt(prompt('digite n1: '));
n2 = parseInt(prompt('digite n2: '));
while(n2 = n1){
    n2 = parseInt(prompt('digite um valor diferente de n2: '));    
}
n3 = parseInt(prompt('digite n3: '));
while(n3 = n2 & n3 == n1){   
    n3 = parseInt(prompt('digite um valor diferente de n3: '));   
}
if (n1> n2 & n1> n3){
    console.log ('n1 é o maior')
}
else if(n2> n1 & n2> n3){
    console.log ('n2 é maior')
} 
else {
    console.log ('n3 é maior')
}