const btnAvancar = document.getElementById('btn-avancar'); 
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao')

//OBJETIVO 1

btnAvancar.addEventListener('click', function () { 

    if (cartaoAtual === cartoes.length - 1) {
        return
    }

    escCartaoSelec();

    cartaoAtual++;
    mostrarCartao();
})

//OBJETIVO 2

btnVoltar.addEventListener('click', function () {

    if (cartaoAtual === 0) {
        return
    }

    escCartaoSelec()

    cartaoAtual--;
    mostrarCartao();
})

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function escCartaoSelec() {
    const cartaoselecionado = document.querySelector('.selecionado');
    cartaoselecionado.classList.remove('selecionado');
}
