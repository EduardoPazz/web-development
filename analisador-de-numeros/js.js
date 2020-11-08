let botao_adicionar = document.getElementById("adicionar_numero"),
    numero_input = document.getElementById("numero"),
    botao_relatorio = document.getElementById("gerar_relatorio"),
    lista = document.getElementById("lista"),
    array_lista = [],
    div_resultado = document.getElementById("relatorio");

botao_adicionar.onclick = testar;  
botao_relatorio.onclick = relatorio;

function limpar() {
    numero_input.value = "";
    numero_input.focus();
}

function testar() {
    let teste = 0 //se ele continnuar 0, o teste é validado. Senão, não.
    for (let index in array_lista) {
        if (numero_input.value == array_lista[index]) {teste++};
    };
    if (teste != 0) {
        window.alert("ERRO, Valor já informado! Insira um novo.")
        limpar();
    } else {
        adicionar();
    };
};

function adicionar() { 
    if (numero_input.value === "" || Number(numero_input.value) < 1 || Number(numero_input.value > 100)) {
        window.alert("ERRO! Informe um número válido");
    } else {
        let opcao = document.createElement("option");
        opcao.innerText = `Valor ${numero_input.value} adicionado`;
        lista.appendChild(opcao);
        array_lista.push(Number(numero_input.value));
    };
    limpar();
};

function relatorio() {
    if (array_lista.length == 0) {
        window.alert("Insira valores para a geração do relatório!");
    } else {
        div_resultado.innerText = ""

        let quantidade_numeros = array_lista.length,
            maior_valor = 0,
            menor_valor = 101,
            soma = 0;
            p_quantidade_numeros = document.createElement("p"),
            p_maior_valor = document.createElement("p"),
            p_menor_valor = document.createElement("p"),
            p_soma = document.createElement("p"),
            p_media = document.createElement("p");

        for (let cont in array_lista) {
            if (array_lista[cont] > maior_valor) {maior_valor = array_lista[cont];};
            if (array_lista[cont] < menor_valor) {menor_valor = array_lista[cont];};
            soma += array_lista[cont];
        };

        let media = soma / quantidade_numeros;

        p_quantidade_numeros.innerText = `Ao todo, temos ${quantidade_numeros} números cadastrados.`;
        p_maior_valor.innerText = `O maior valor informado foi ${maior_valor}`;
        p_menor_valor.innerText = `O menor valor informado foi ${menor_valor}`;
        p_soma.innerText = `Somando todos os valores, temos ${soma}`;
        p_media.innerText = `A média dos valores digitados é ${media}`;
        
        div_resultado.appendChild(p_quantidade_numeros);
        div_resultado.appendChild(p_maior_valor);
        div_resultado.appendChild(p_menor_valor);
        div_resultado.appendChild(p_soma);
        div_resultado.appendChild(p_media);
    };
    limpar();
};