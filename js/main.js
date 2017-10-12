var campo = $(".campo-digitacao");
var tempo = $("#tempo").text();
/*
$(document).ready(function () {
    attValorFrase(campo);
    contadores(campo);
    cronometro(campo, tempo);
    btnReiniciar(tempo);
});*/
$(function () {
    attValorFrase(campo);
    contadores(campo);
    cronometro(campo, tempo);
    btnReiniciar(tempo);
});
