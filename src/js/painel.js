/*
    Quando clicar na seta para avançar, temos que esconder todas as imagens e msotrar a próxima .
    A imagem atual começa em 0 pq é a primeira. Assim que for clicado no botão "avançar", precisa adicionar +1 ao contador de imagens para poder saber que agora vai ser mostrada a próxima.
        Esconder todas as imagens;
        Pegar todas as imagens usando o DOM e remover a classe "mostrar";
        Mostrar a próxima imagem;
        Pegar todas as imagens, descobrir qual é a próxima e colocar a classe "mostrar" nela;
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    })
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function () {
    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual++;

    esconderImagens();
    mostrarImagem();
})

setaVoltar.addEventListener('click', function() {
    if(imagemAtual === 0) {
        return
    }
    
    imagemAtual--;

    esconderImagens();
    mostrarImagem();
})

const botaoRedeSocial = document.getElementById('redesSociais');

botaoRedeSocial.addEventListener('click', function () {
    alert('Esta agência é fictícia! Não existem contatos.')
})