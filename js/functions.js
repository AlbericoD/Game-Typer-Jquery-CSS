function cronometro(campo, tempo) {
    campo.one('focus', function () {
        $("#btn-reiniciar").attr("disabled", true);
        var tempoRestante = tempo;
        var cronomtroID = setInterval(function () {
            tempoRestante--;
            $("#tempo").text(tempoRestante);
            if (tempoRestante == 0) {
                campo.attr("disabled", true);
                clearInterval(cronomtroID);
                fimJogo();
            }
        }, 1000);
    });
}
function fimJogo() {
    $("#btn-reiniciar").attr("disabled", false);
    campo.toggleClass("campo-desativado");
    inserePlacar();
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
function marcadores(campo) {
    var frase = $(".frase").text();
    campo.on("input", function () {
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);
        if (digitado == comparavel) {
            campo.addClass("campo-correto");
            campo.removeClass("campo-errado");
        } else {
            campo.addClass("campo-errado");
            campo.removeClass("campo-correto");
        }

    });
}
function inserePlacar() {
    var tabela = $(".placar").find("tbody");
    var usuario = "Alberico";
    var nPalavras = $("#contador-palavras").text();
    var linha = novaLinha(usuario, nPalavras);
    linha.find(".btn-remover").click(btnRemoverLinha);
    tabela.prepend(linha);
    $(".placar").slideDown(500);
    scrollPlacar();
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href", "#").addClass("btn-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
    return linha;

}

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;
    $("body").animate(
        {
            scrollTop: posicaoPlacar + "px"
        }, 1000
    );
}