let save = '', saveAll = '';
function testera(botao) {
    let tela = document.getElementById('resultado')
    tela.innerHTML = botao.value
    let str = document.getElementById('resultado').innerText
    save = str;
}




function select() {
    let botoes = document.querySelectorAll('[id="button"]');
    let percorrer = botoes.length;
    for (let x = 0; x < percorrer; x++) {
        botoes[x].addEventListener("click", function () {
            testera(botoes[x])
            saveAll = saveAll + save
            document.getElementById('resultado').innerHTML = saveAll
        });
    }

}
select();

const efetuaOperacao = (event) => {
    event.preventDefault();

    const operacao = document.getElementById('resultado').innerText
    document.getElementById('resultado').innerHTML = eval(operacao);

}

function reiniciar() {
    window.location.reload(true)
}

const Apagar = (event) => {
    event.preventDefault();
    const operacao = document.getElementById('resultado').innerText
    saveAll = operacao.slice(0, operacao.length - 1)
    document.getElementById('resultado').innerHTML = saveAll;
}

document.getElementById('endOperation').addEventListener('click', efetuaOperacao);
document.getElementById('reload').addEventListener('click', reiniciar);
document.getElementById('Delete').addEventListener('click', Apagar);