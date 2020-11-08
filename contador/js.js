function contar() {

    var i = Number(document.getElementById("inicializacao").value),
        c = Number(document.getElementById("condicao").value),
        p = Number(document.getElementById("passo").value),
        resultado = document.getElementById("resultado");
    
    if (document.getElementById("condicao").value === "") {
        window.alert("Limite não informado. Impossível de prosseguir");
    } else {
        if (document.getElementById("inicializacao").value === "") {window.alert("Início não informado. Assumindo-o como 0")};
        if (document.getElementById("passo").value === "" || p <= 0) {
            window.alert("Salto inválido. Assumindo-o como 1");
            p = 1;
        };
        
        resultado.innerText = "";
        document.getElementById("numero").innerText = p;
        
        if (c < i) {
            for (var cont = i; cont >= c; cont -= p) {
                resultado.innerHTML += `${cont} &#128073;`;
            };
        } else {
            for (var cont = i; cont <= c; cont += p) {
                resultado.innerHTML += `${cont} &#128073;`;
            };
        };
        resultado.innerHTML += `&#128285`;
    };
};



