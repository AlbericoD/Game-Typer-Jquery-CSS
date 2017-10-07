function btnReiniciar(tempo) {
    $("#btn-reiniciar").click(function () {
        campo.attr("disabled", false);
        campo.val("");
        $("#contador-palavras").text("0");
        $("#contador-caracteres").text("0");
        $("#tempo").text(tempo);
        cronometro(campo,tempo);
        console.log("reiniciar clicado");
    });
}