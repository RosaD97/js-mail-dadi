const utente = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;
console.log(utente);
console.log(computer);

if(utente > computer){
    alert("vittoria");
}else if(utente < computer){
    alert("Hai perso");
}else if(utente === computer){
    alert("Pareggio");
}