document.getElementById("gerar_tabuada").onclick = tabuar;
document.getElementById("limpar_tabuada").onclick = limpar;
let selecao = document.getElementById("tabuada");
function tabuar() {
    let num = document.getElementById("numero").value;
    
    if (num === "") {
        window.alert("Informe um número.");
    } else {
        let numero = Number(num);
        for (let cont = 0; cont <= 10; cont++) {
            let opcao = document.createElement("option"); //criação de uma linha 
            opcao.innerText = `${numero} x ${cont} = ${numero*cont}`;
            selecao.appendChild(opcao);
        };
    };
};

function limpar() {
    selecao.innerText = ""; //apaga tabuadas previamente criadas    
}
