//Vetor que armazena os números das fotos para serem substituídas;
const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;
let img = document.getElementById('imgCarrossel');

//Timer que roda a função timerCarroselVet a cada 3600 milissegundos;
const timerCarrosel = window.setInterval(rodarCarrossel, 3600);

//Troca a imagem do banner automaticamente, passando por cada valor do vetor
function rodarCarrossel() {
    if (i > 8) {
        i = 0;
        rodarCarrossel();
    } else {        
        img.setAttribute("src", `../imagens/imagens_carrosel/0${vetor[i]}.png`);
        i++;
    }
}

//Troca a imagem do banner manualmente, puxando o value do button clicado;
function trocarImagem(valor){
    img.setAttribute("src", `../imagens/imagens_carrosel/0${parseFloat(valor)}.png`);
}






