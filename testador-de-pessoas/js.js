function calcular() {
    var ano_nasc = document.querySelector("input#ano").value,
        ano_atual = new Date().getFullYear(),
        idade = ano_atual - ano_nasc,
        masc = document.getElementById("masc"),
        fem = document.getElementById("fem"),
        gen, estado;

    if (ano_nasc.length != 4 || idade > 100 || idade < 0) {
        window.alert("ATENÇÃO! Informe o ano de nascimento correto!")
    } else {
        if (masc.checked == false && fem.checked == false) {
            window.alert("ATENÇÃO! Informe um gênero");
        } else {
            gen = masc.checked == true ? "homem" : "mulher";
            
            document.getElementById("desc").innerHTML = `Você tem <strong>${idade} anos</strong> e é <strong>${gen}</strong.`;

            if (idade < 18) {
                estado = "crianca";
            } else if (idade < 60) {
                estado = "adulto";
            } else {
                estado = "velho"
            };
            
            foto.src = `images/${gen}-${estado}.jpg`
        };
    };
};