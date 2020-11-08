function carregar() {
    var hora = new Date().getHours(), fonte, cor;

    document.querySelector("div#texto").innerText = `São ${hora}h`;

    if (hora >= 6 && hora < 12) {
        cor = "rgb(64, 217, 255)";
        fonte = "images/manha.jpg";
    } else if (hora >= 12 && hora <= 18) {
        cor = "rgb(236, 173, 77)";
        fonte = "images/tarde.jpg";
    } else {
        cor = "rgb(4, 14, 66)";
        fonte = "images/noite.jpg";
    };

    document.body.style.backgroundColor = cor;
    img.src = fonte;
};
