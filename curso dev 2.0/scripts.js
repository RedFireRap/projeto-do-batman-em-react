let circulo = document.querySelector('.circulo')
let imagem = document.querySelector('.imagem-copo')


function trocarACor(cor){
    circulo.style.background = cor
}

function trocarImagem(endereco){
    imagem.src = endereco
}
