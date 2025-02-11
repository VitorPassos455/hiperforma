const produtos = {
    creatina: {
        palavras: ['creatina', 'Creatina', 'CREATINA'],
        pagina: "../html/pagina_detalhes_creatina.html"
    },
    hipercalorico: {
        palavras: ['hipercalorico', 'hiper calorico', 'hipercalórico', 'hiper calórico', 'HIPERCALORICO', 'HIPER CALORICO', 'HIPERCALÓRICO', 'HIPER CALÓRICO'],
        pagina: "../html/pagina_detalhes_hipercalorico.html"
    },
    wheyProtein: {
        palavras: ['wheyprotein', 'whey protein', 'wheiprotein', 'whei protein', 'WHEYPROTEIN', 'WHEY PROTEIN', 'WHEIPROTEIN', 'WHEI PROTEIN'],
        pagina: "../html/pagina_detalhes_whey_protein.html"
    },
    termogenico: {
        palavras: ['termogênico', 'termogenico', 'TERMOGÊNICO', 'TERMOGENICO'],
        pagina: "../html/pagina_detalhes_cafeina.html"
    },
    psyllium: {
        palavras: ['psyllium', 'psylium', 'psillium', 'psilium', 'pisillium', 'pisilium', 'picilium', 'psillyum', 'psilyum', 'PSYLLIUM', 'PSYLIUM', 'PSILLIUM', 'PSILIUM', 'PISILLIUM', 'PISILIUM', 'PICILIUM', 'PSILLYUM', 'PSILYUM'],
        pagina: "../html/pagina_detalhes_Psyllium.html"
    },
    picolinato: {
        palavras: ['picolinato', 'picolinato de cromo', 'picolinatodecromo', 'piliconato de cromo', 'PICOLINATO', 'PICOLINATO DE CROMO', 'PICOLINATODECROMO', 'PILICONATO DE CROMO'],
        pagina: "../html/pagina_detalhes_Psyllium.html"
    },
    pre_treino: {
        palavras: ['pré treino', 'pre treino', 'prétreino', 'pretreino', 'pré-treino', 'pre-treino', 'PRÉ TREINO', 'PRE TREINO', 'PRÉTREINO', 'PRETREINO', 'PRÉ-TREINO', 'PRE-TREINO'],
        pagina: "../html/pagina_detalhes_pre_treino.html"
    },
    l_carnitina: {
        palavras: ['L-Carnitina', 'l-Carnitina', 'l-carnitina', 'L-carnitina', 'L-Cartinina', 'l-Cartinina', 'l-cartinina', 'L-cartinina', 'L-CARNITINA', 'L-CARNITINA', 'L-CARNITINA', 'L-CARNITINA', 'L-CARTININA', 'L-CARTININA', 'L-CARTININA', 'L-CARTININA'],
        pagina: "../html/pagina_detalhes_L-carnitina.html"
    },
    beta_alanina: {
        palavras: ['Beta Alanina', 'Beta alanina', 'beta alanina', 'BetaAlanina', 'Betaalanina', 'betaalanina', 'Betalanina', 'betalanina', 'Betalanina', 'betalanina', 'BETA ALANINA', 'BETA ALANINA', 'BETA ALANINA', 'BETAALANINA', 'BETAALANINA', 'BETAALANINA', 'BETALANINA'],
        pagina: "../html/pagina_detalhes_beta_alanina.html"
    },
    multivitaminico: {
        palavras: ['Multivitamínico', 'multivitamínico', 'Multivitaminico', 'multivitaminico', 'MULTIVITAMÍNICO', 'MULTIVITAMINICO', 'Mutivitamínico', 'mutivitamínico', 'Mutivitaminico', 'mutivitaminico'],
        pagina: "../html/pagina_detalhes_multivitaminico.html"
    },
    omega3: {
        palavras: ['Ômega 3', 'Omega 3', 'Ômega3', 'Omega3', 'ômega 3', 'omega 3', 'ômega3', 'omega3'],
        pagina: "../html/pagina_detalhes_omega3.html"
    },
    colageno: {
        palavras: ['Colágeno', 'Colageno', 'colágeno', 'colageno', 'COLÁGENO', 'COLAGENO', 'Colágeno hidrolisado', 'Colageno hidrolisado'],
        pagina: "../html/pagina_detalhes_colageno_hidrolisado.html"
    },
    roupas: {
        palavras: ['camisa', 'camiseta', 'regata', 'blusa', 'bermuda', 'short', 'shorts', 'moletom', 'moleton', 'blusa térmica', 'blusa termica', 'camisa térmica', 'camisa termica'],
        pagina: "../html/roupas.html"
    }
};

function pesquisar() {
    let palavra = document.getElementById('inputpesquisa').value.toLowerCase();

    for (let produto in produtos) {
        if (produtos[produto].palavras.map(p => p.toLowerCase()).includes(palavra)) {
            window.location.href = produtos[produto].pagina;
            return;
        }
    }

    palavraNaoEncontrada();
}

function palavraNaoEncontrada() {
    window.location.href = "../html/pagina_produto_nao_econtrado.html";
}
