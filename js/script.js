//do una variabile alla mail 
let mail = document.getElementById("inputEmail3");
//let formResult = document.createElement('');

//creo una serie di variabili con l'array

let listaMail = ["maronno@addicted.it","gigicastrenze@lolla.it","ornellobergogli@unkown.it","lavedenza@santa.it","coniglio@molesto.com","versolinfinito@eoltre.com"];

//rendo l'array visibile nella console
for(let i = 0; i <= listaMail.length; i++) {
    console.log(listaMail);
}

//impianto le condizioni
if(mail.value )