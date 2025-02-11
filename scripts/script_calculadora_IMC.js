sexo = 0;

function definirSexoMasc() {
    sexo = 'masc';
}

function definirSexoFem() {
    sexo = 'fem';
}

function calcularTMB() {
    peso = parseFloat(document.getElementById('peso').value);
    altura = parseFloat(document.getElementById('altura').value);
    idade = parseFloat(document.getElementById('idade').value);


    if (sexo == 0) {
        alert('É necessário informar um sexo válido!')
    } else {
        switch (sexo) {
            case 'masc':
                TMB = (88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade)).toFixed(0);
                break;
            case 'fem':
                TMB = (447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade)).toFixed(0);
                break;
        }
        resposta();
    }
}

const qtdProt = document.getElementById('qtdProt');
const qtdCarbs = document.getElementById('qtdCarbs');
const qtdGord = document.getElementById('qtdGord');

function resposta() {
    spanResp = document.getElementById('spanResp');
    spanResp.innerHTML = `${TMB} kcal`;
}



function perdaDeGordura() {
    qtdProt.innerText = ``;
    qtdCarbs.innerText = ``;
    qtdGord.innerHTML = ``

    if (isNaN(peso)) {
        alert('Primeiro calcule seu TMB com a calculadora acima!')
    } else {
        proteina = parseInt((2 * peso).toFixed(1));
        qtdProt.innerText = `${proteina} gramas`;

        carbs = parseInt((peso * 1.2).toFixed(1));
        qtdCarbs.innerText = `${carbs} gramas`;

        gordura = parseInt(2);
        qtdGord.innerHTML = `${gordura} gramas`;
    }
}
function ganhoDeMassa() {

    qtdProt.innerText = ``;
    qtdCarbs.innerText = ``;
    qtdGord.innerHTML = ``

    if (isNaN(peso)) {
        alert('Primeiro calcule seu TMB com a calculadora acima!')
    } else {
        proteina = parseInt((1.5 * peso).toFixed(1));
        qtdProt.innerText = `${proteina} gramas`;

        carbs = parseInt((peso * 3).toFixed(1));
        qtdCarbs.innerText = `${carbs} gramas`;

        gordura = parseInt(2);
        qtdGord.innerHTML = `${gordura} gramas`;
    }
}

function manutencao() {

    qtdProt.innerText = ``;
    qtdCarbs.innerText = ``;
    qtdGord.innerHTML = ``

    if (isNaN(peso)) {
        alert('Primeiro calcule seu TMB com a calculadora acima!')
    } else {
        proteina = parseInt((1.8 * peso).toFixed(1));
        qtdProt.innerText = `${proteina} gramas`;

        carbs = parseInt((peso * 2).toFixed(1));
        qtdCarbs.innerText = `${carbs} gramas`;

        gordura = parseInt(2);
        qtdGord.innerHTML = `${gordura} gramas`;
    }
}