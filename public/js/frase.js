$("#botao-frase").click(atualizafrase);
$("#botao-frase-id").click(buscafrase);

function atualizafrase() {
    console.log("fui clicado");
    $("#spinner").toggle();
    $.get("http://localhost:3000/frases", alterafrase)
        .fail(function () {
            $("#erro").toggle();
            setTimeout(function () {
                $("#erro").toggle();
            }, 2000);
        }).always(function () {
            $("#spinner").toggle();
        });
}

function alterafrase(data) {
    // console.log("carregando dados");
    // console.log(data);
    // console.log("dados carregados");
    var frase = $(".frase");
    var gerador = Math.floor(Math.random() * data.length);
    // console.log(gerador);
    frase.text(data[gerador].texto);
    atualizaTamanhoFrase();
    atualizaCronometro(data[gerador].tempo);
}
function buscafrase() {
    console.log("Frase buscada");
    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();
    console.log(fraseId);
    var dados = { id: fraseId }; // guarda o id
    $.get("http://localhost:3000/frases", dados, trocafrase).fail(function () {
        $("#erro").toggle();
        setTimeout(function () {
            $("#erro").toggle();
        }, 2000);
    }).always(function () {
        $("#spinner").toggle();
    });
}
function trocafrase(data) {
    console.log(data);

    var frase = $(".frase");
    frase.text(data.texto);//busca do JSON
    atualizaTamanhoFrase();
    atualizaCronometro(data.tempo);
}