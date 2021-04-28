/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

// quanti km si intendono percorrere?
var km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(km);
document.getElementById("km").innerHTML = km + " km";
// quanti anni hai?
var eta = parseInt(prompt("Scrivi la tua età"));
console.log(eta);
document.getElementById("eta").innerHTML = eta + " anni";
// biglietto intero
var bigliettoInt = km * 0.21;
console.log(bigliettoInt);
// sconto del 20% per i minorenni
var biglietto20 = ((bigliettoInt * 20) / 100);
var bigliettoMin = (bigliettoInt - biglietto20);
var minDec2 = bigliettoMin.toFixed(2);
console.log(bigliettoMin);
console.log(minDec2);
// conto del 40% per gli over 65
var biglietto40 = ((bigliettoInt * 40) / 100);
var bigliettoOver = (bigliettoInt - biglietto40);
var overDec2 = bigliettoOver.toFixed(2);
console.log(bigliettoOver);
console.log(overDec2);

if (eta < 18) {
    console.log(minDec2);
    document.getElementById("costo").innerHTML = (minDec2 + " €");
} else if (eta >= 65) {
    console.log(overDec2);
    document.getElementById("costo").innerHTML = (overDec2 + " €");
} else {
    console.log(bigliettoInt);
    document.getElementById("costo").innerHTML= (bigliettoInt + " €");
}

