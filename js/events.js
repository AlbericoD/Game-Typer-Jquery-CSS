function btnReiniciar(tempo) {
    $("#btn-reiniciar").click(function () {
        campo.attr("disabled", false);
        campo.val("");
        $("#contador-palavras").text("0");
        $("#contador-caracteres").text("0");
        $("#tempo").text(tempo);
        cronometro(campo, tempo);
        console.log("reiniciar clicado");
        campo.toggleClass("campo-desativado");
        campo.removeClass("campo-correto");
        campo.removeClass("campo-errado");
    });
}

function btnRemoverLinha() {
    event.preventDefault();
    var linha = $(this).parent().parent();
    linha.fadeOut(1000);
    setTimeout(function() {
        console.log("removendo");
        linha.remove();
        console.log("removido");
    }, 1000);
}

$("#btn-placar").click(btnPlacar);

function btnPlacar() {

    console.log("placar");
    $(".placar").stop().slideToggle(1000);
    console.log("placar dps")
}