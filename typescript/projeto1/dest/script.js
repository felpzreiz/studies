"use strict";
function estilo() {
    document.getElementById('corpo').style.backgroundRepeat = "no-repeat";
    document.getElementById('corpo').style.transition = "all 1s";
    document.getElementById('texto').style.color = "black";
    document.getElementById('titulo').style.color = "black";
    document.getElementById('glow').innerText = ("");
}
function aquele() {
    document.getElementById('res').innerText = ("");
}
function sorteio() {
    var numero = Math.floor(Math.random() * 7);
    console.log(numero);
    switch (numero) {
        case 0:
            document.getElementById('res').innerText = ("sua casa");
            document.getElementById('corpo').style.background = "linear-gradient(#9acd32, #ffffff)";
            estilo();
            document.getElementById('imagem').src = "https://em-content.zobj.net/source/apple/391/house-with-garden_1f3e1.png";
            document.getElementById('texto').innerText = ("tá doido muito romântico, começa na piscina termina com eu virado do avesso no quarto");
            break;
        case 1:
            document.getElementById('res').innerText = ("minha casa");
            document.getElementById('corpo').style.background = "linear-gradient(#808080, #ffffff)";
            estilo();
            document.getElementById('imagem').src = "https://em-content.zobj.net/source/apple/391/skull-and-crossbones_2620-fe0f.png";
            document.getElementById('texto').innerText = ("ok, viver perigosamente e tal né");
            break;
        case 2:
            document.getElementById('res').innerText = ("cinema");
            document.getElementById('corpo').style.background = "linear-gradient(#b22222, #ffffff)";
            estilo();
            document.getElementById('imagem').src = "https://em-content.zobj.net/source/apple/391/popcorn_1f37f.png";
            document.getElementById('texto').innerText = ("o auge do romantismo, vou ficar olhando pra sua cara o filme inteiro e se me perguntar no final o que rolou não vou fazer a mínima ideia");
            break;
        case 3:
            document.getElementById('res').innerText = ("casa de ração");
            document.getElementById('corpo').style.background = "linear-gradient(#ffd700, #ffffff)";
            estilo();
            document.getElementById('imagem').src = "https://em-content.zobj.net/source/apple/391/clinking-beer-mugs_1f37b.png";
            document.getElementById('texto').innerText = ("graças a deus, todo dia é dia pra encher o rabo e falar daquilo que tá no fundo da alma né");
            break;
        case 4:
            document.getElementById('res').innerText = ("jorge e matheus");
            document.getElementById('corpo').style.background = "linear-gradient(#d2691e, #ffffff)";
            estilo();
            document.getElementById('imagem').src = "https://em-content.zobj.net/source/apple/391/cowboy-hat-face_1f920.png";
            document.getElementById('texto').innerText = ("ⓘ Opção bloqueada até o dia 20 de julho.");
            break;
        case 5:
            aquele();
            document.getElementById('glow').innerText = ("1001");
            document.getElementById('corpo').style.background = "black";
            document.getElementById('corpo').style.backgroundRepeat = "repeat";
            document.getElementById('titulo').style.color = "white";
            document.getElementById('texto').style.color = "white";
            document.getElementById('imagem').src = "https://em-content.zobj.net/source/apple/391/flushed-face_1f633.png";
            document.getElementById('texto').innerText = ("o nojeira da porra, mas tem que conhecer o mundo né");
            break;
        case 6:
            document.getElementById('res').innerText = ("pular da ponte juntos");
            document.getElementById('corpo').style.background = "linear-gradient(#d7ab93, #ffffff)";
            estilo();
            document.getElementById('imagem').src = "https://em-content.zobj.net/source/apple/391/sunrise_1f305.png";
            document.getElementById('texto').innerText = ("ir de arrasta, ir de americanas, getuliar, ir de tio paulo, ver o show do chorão, ir de submarino, descobrir o que só os loucos sabem, virar camisa de saudade, etc");
            break;
    }
}
