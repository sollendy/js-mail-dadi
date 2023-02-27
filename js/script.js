//do una variabile alla mail 
let mailEl = document.getElementById("inputEmail3").value;
let inputEl = document.getElementById('bottone');
let formResult = document.createElement('b');

//creo una serie di variabili con l'array
let listaMail = ["maronno@addicted.it","gigicastrenze@lolla.it","ornellobergogli@unknown.it","lavedenza@santa.it","coniglio@molesto.com","versolinfinito@eoltre.com"];

inputEl.addEventListener('click', function() {

    let verificato = false;

    for(let i = 0; i <= listaMail.length; i++) {

        //se la mail corrisponde
        if (listaMail[i] == mailEl.value) {
            verificato = true;
        }

    }

    if (verificato == true) {
        console.log('Accesso verificato.');
    } else {
        console.log('accesso interdetto.');
    }

});

