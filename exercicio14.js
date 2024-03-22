let prompt = require ('prompt-sync')();
gremio = parseInt (prompt('digite o número de gols: '));
inter = parseInt (prompt('digite o número de gols: '));
if(gremio> inter){
    console.log ('gremio é o vencedor')
}else if(inter> gremio){
    console.log ('inter é o vencedor')
}else{
    console.log ('empate')
}
