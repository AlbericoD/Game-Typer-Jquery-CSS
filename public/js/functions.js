function cronometro(campo, tempo) {
    campo.one('focus', function () {
        $("#btn-reiniciar").attr("disabled",true);
        var tempoRestante = tempo;
        var cronomtroID = setInterval(function () {
            tempoRestante--;
            $("#tempo").text(tempoRestante);
            if (tempoRestante == 0) {
                campo.attr("disabled", true);
                clearInterval(cronomtroID);
                $("#btn-reiniciar").attr("disabled",false);
            }
        }, 1000);
    });
}
function contadores(campo) {
    campo.on("input", function () {
        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        var qtdCaracteres = conteudo.length;
        $("#contador-palavras").text(qtdPalavras);
        $("#contador-caracteres").text(qtdCaracteres);
    });
}
function attValorFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase").text(numPalavras);
    var campo = $(".campo-digitacao");
    var tempo = $("#tempo").text();
}