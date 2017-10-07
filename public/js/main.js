//console.log("teste carregamento");
var frase = $(".frase").text();
console.log(frase);

var numPalavras = frase.split(" ").length;
console.log(numPalavras);

var tamanhoFrase = $("#tamanho-frase").text(numPalavras);
console.log(tamanhoFrase);

