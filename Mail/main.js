'use strict';

const emailInserita = prompt('Inserisci la tua email');
const emailIscritte = ["luca@email.com", "rosa@email.com", "paolo@email.com", "ciro@email.com", "laura@email.com"];

for (let i = 0; i < emailIscritte.length; i++) {
    if(emailIscritte[i] === emailInserita){
        alert("Questa mail esiste già, inseriscine un'altra!");
    }
}