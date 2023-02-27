//do una variabile alla mail 
let mailEl = document.getElementById("inputEmail3");
let inputEl = document.getElementById('bottone');
let formResult = document.getElementById("inputNext");
let dadiGame = document.getElementById('dadiMalefici');

//creo una serie di variabili con l'array
let listaMail = ["maronno@addicted.it","gigicastrenze@lolla.it","ornellobergogli@laspia.it","lavedenza@santa.it","coniglio@molesto.com","versolinfinito@eoltre.com"];

inputEl.addEventListener('click', function() {

    let verificato = false;

    for(let i = 0; i < listaMail.length; i++) {

        //se la mail corrisponde
        if (listaMail[i] == mailEl.value) {
            verificato = true;
        }

    }

    let newEelement = document.createElement('b');
    formResult.append(newEelement);

    if (verificato == true) {
        //console.log('Accesso verificato.');
        newEelement.innerHTML = "Mail valida.";
    } else {
        //console.log('Accesso interdetto.');
        newEelement.innerHTML = "Mail non valida.";
    }

});

//gioco dei dadi: come voglio procedere?
/* 
    1) creare i giocatori con le variabili --> giocatore & cpu
    2) dare loro le cifre con la proprietà math random
    3) esporre le cifre tramite gli if
    4) vedere se il mio scherma è giusto e non ho scritto castronerie
*/

//1) creare i giocatori con le variabili --> giocatore & cpu
let risultato = document.getElementById('verdetto');
let playerBox = document.getElementById('giocatore');
let dadiBottone = document.getElementById('bottoneMagico')
let cpuBox = document.getElementById('CPU');


bottoneMagico.addEventListener('click', function() {


    let giocatore = Math.floor(Math.random() * 6) + 1;
    let computer = Math.floor(Math.random() * 6) + 1;
    let textResult = document.createElement('p');
    risultato.append(textResult);
    playerBox.innerHTML = ("Cifra giocatore: " + giocatore);
    cpuBox.innerHTML = ("Cifra computer: " + computer);


    if (giocatore > computer) {
        textResult.innerHTML = '<b>Hai vinto!</b>';
    }
    else if (computer > giocatore) {
        textResult.innerHTML = '<b>Hai piersoh!</b>';
    }
    else {
        textResult.innerHTML = '<b>Pareggio!</b>';
    }

    


    
    console.log(giocatore, computer);
});