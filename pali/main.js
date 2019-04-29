// Inserisco la parola tramite prompt
var insertWord = prompt("Inserisci una parola");
//divido la parola inserita creando un array
var split = insertWord.split("");
console.log(split)
// inverto la parola
var reverse = split.reverse();
console.log(reverse)
//unisco la parola invertita
var reversedWord = reverse.join("")
console.log(reversedWord)

// condizione: se la parola invertita è uguale alla
// parola inserita, allora e' palindroma

if (insertWord == reversedWord) {
  alert("Questa parola è palindroma")
} else {
  alert("Questa parola non è palindroma")
}
