var pariDispari = prompt("Scegli pari o dispari");
var pari = false;
var dispari = false;
if (pariDispari !== "pari" && pariDispari !== "dispari") {
  alert("puoi solamente scrivere pari o dispari (in minuscolo)");
} else if (pariDispari == "pari") {
  pari = true;

} else if (pariDispari = "dispari") {
  dispari = true;
}


var chooseNumber = parseInt(prompt("scegli un numero da 1 a 5"));
var cpuNumber = Math.floor(Math.random() * 5) + 1;
console.log(cpuNumber)
var sum = chooseNumber + cpuNumber;
console.log(sum)


if (sum % 2 == 0) {
   risultato = "even";
} else {
   risultato = "odd";
}

if ((risultato = "even") && (pari = true)) {
  alert("hai vinto");
} else if ((risultato = "odd") && (dispari = true)) {
  alert("hai vinto");
} else {
  alert ("hai perso");
}
