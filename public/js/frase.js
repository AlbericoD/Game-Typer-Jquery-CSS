$("#botao-frase").click(atualizafrase);

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