const creatina = ['creatina', 'Creatina', 'CREATINA'];
const hipercalorico = ['hipercalorico', 'hiper calorico', 'hipercalórico', 'hiper calórico', 'HIPERCALORICO', 'HIPER CALORICO', 'HIPERCALÓRICO', 'HIPER CALÓRICO'];
const wheyProtein = ['wheyprotein', 'whey protein', 'wheiprotein', 'whei protein', 'WHEYPROTEIN', 'WHEY PROTEIN', 'WHEIPROTEIN', 'WHEI PROTEIN'];
const termogenico = ['termogênico', 'termogenico', 'TERMOGÊNICO', 'TERMOGENICO'];
const psyllium = ['psyllium', 'psylium', 'psillium', 'psilium', 'pisillium', 'pisilium', 'picilium', 'psillyum', 'psilyum', 'PSYLLIUM', 'PSYLIUM', 'PSILLIUM', 'PSILIUM', 'PISILLIUM', 'PISILIUM', 'PICILIUM', 'PSILLYUM', 'PSILYUM'];
const picolinato = ['picolinato', 'picolinato de cromo', 'picolinatodecromo', 'piliconato de cromo', 'PICOLINATO', 'PICOLINATO DE CROMO', 'PICOLINATODECROMO', 'PILICONATO DE CROMO'];
const pre_treino = ['pré treino', 'pre treino', 'prétreino', 'pretreino', 'pré-treino', 'pre-treino', 'PRÉ TREINO', 'PRE TREINO', 'PRÉTREINO', 'PRETREINO', 'PRÉ-TREINO', 'PRE-TREINO'];
const l_carnitina = ['L-Carnitina', 'l-Carnitina', 'l-carnitina', 'L-carnitina', 'L-Cartinina', 'l-Cartinina', 'l-cartinina', 'L-cartinina', 'L-CARNITINA', 'L-CARNITINA', 'L-CARNITINA', 'L-CARNITINA', 'L-CARTININA', 'L-CARTININA', 'L-CARTININA', 'L-CARTININA', 'L Carnitina', 'l Carnitina', 'l carnitina', 'L carnitina', 'L Cartinina', 'l Cartinina', 'l cartinina', 'L cartinina','L CARNITINA', 'L CARTININA', 'L CARTININA', 'L CARTININA', 'L CARTININA'];
const beta_alanina = ['Beta Alanina','Beta alanina','beta alanina','BetaAlanina','Betaalanina','betaalanina','Betalanina','betalanina','Betalanina','betalanina','BETA ALANINA','BETA ALANINA','BETA ALANINA','BETAALANINA','BETAALANINA','BETAALANINA','BETALANINA','BETALANINA','BETALANINA','BETALANINA','Beta-Alanina','Beta-alanina','beta-alanina','Beta-lanina','beta-lanina','Beta-lanina','beta-lanina','BETA-ALANINA','BETA-LANINA'];
const multivitaminico = ['Multivitamínico','multivitamínico','Multivitaminico','multivitaminico','MULTIVITAMÍNICO','MULTIVITAMINICO','Mutivitamínico','mutivitamínico','Mutivitaminico','mutivitaminico','MUTIVITAMÍNICO','MUTIVITAMINICO'];
const omega3 = ['Ômega 3','Omega 3','Ômega3','Omega3','ômega 3','omega 3','ômega3','omega3','OMEGA 3','ÔMEGA 3','ÔMEGA3','OMEGA3'];
const colageno = ['Colágeno','Colageno','colágeno','colageno','COLÁGENO','COLAGENO','Colágeno hidrolisado','Colageno hidrolisado','colágeno hidrolisado','colageno hidrolisado','COLÁGENO HIDROLISADO','COLAGENO HIDROLISADO','Colágeno-hidrolisado','Colageno-hidrolisado','colágeno-hidrolisado','colageno-hidrolisado','COLÁGENO-HIDROLISADO','COLAGENO-HIDROLISADO','Colágeno Hidrolisado'];
const roupas = ['camisa','camiseta','regata','blusa','bermuda','short','shorts','moletom','moleton','blusa térmica','blusa termica','camisa térmica','camisa termica','roupa','vestuário',''];


function pesquisar() {

    palavra = document.getElementById('inputpesquisa').value;

    procurarPorCreatina();
    if (procurarPorCreatina() == true) return;
    
    procurarPorHipercalorico();
    if (procurarPorHipercalorico() == true) return;

    procurarPorWheyProtein();
    if (procurarPorWheyProtein() == true) return;

    procurarPorTermogenico();
    if (procurarPorTermogenico() == true) return;

    procurarPorPsyllium();
    if (procurarPorPsyllium() == true) return;

    procurarPorPicolinato();
    if (procurarPorPicolinato() == true) return;

    procurarPorPreTreino();
    if (procurarPorPreTreino() == true) return;

    procurarPorLCarnitina();
    if (procurarPorLCarnitina() == true) return;

    procurarPorBetaAlanina();
    if (procurarPorBetaAlanina() == true) return;

    procurarPorMultivitaminico();
    if (procurarPorMultivitaminico() == true) return;

    procurarPorOmega3();
    if (procurarPorOmega3() == true) return;
    
    procurarPorColageno();
    if (procurarPorColageno() == true) return;

    procurarPorRoupas();
    if (procurarPorRoupas() == true) return;


    palavraNaoEncontrada();
}


function procurarPorCreatina() {
    for (let i = 0; i < creatina.length; i++) {
        if (palavra == creatina[i]) {
            window.location.href = "../html/pagina_detalhes_creatina.html";
            return true;
        }
    }
}

function procurarPorHipercalorico() {
    for (let i = 0; i < hipercalorico.length; i++) {
        if (palavra == hipercalorico[i]) {
            window.location.href = "../html/pagina_detalhes_hipercalorico.html";
            return true;
        }
    }
}

function procurarPorWheyProtein() {
    for (let i = 0; i < wheyProtein.length; i++) {
        if (palavra == wheyProtein[i]) {
            window.location.href = "../html/pagina_detalhes_whey_protein.html";
            return true;
        }
    }
}

function procurarPorTermogenico() {
    for (let i = 0; i < termogenico.length; i++) {
        if (palavra == termogenico[i]) {
            window.location.href = "../html/pagina_detalhes_cafeina.html";
            return true;
        }
    }
}

function procurarPorPsyllium() {
    for (let i = 0; i < psyllium.length; i++) {
        if (palavra == psyllium[i]) {
            window.location.href = "../html/pagina_detalhes_Psyllium.html";
            return true;
        }
    }
}

function procurarPorPicolinato() {
    for (let i = 0; i < picolinato.length; i++) {
        if (palavra == picolinato[i]) {
            window.location.href = "../html/pagina_detalhes_Psyllium.html";
            return true;
        }
    }
}

function procurarPorPreTreino() {
    for (let i = 0; i < pre_treino.length; i++) {
        if (palavra == pre_treino[i]) {
            window.location.href = "../html/pagina_detalhes_pre_treino.html";
            return true;
        }
    }
}

function procurarPorLCarnitina() {
    for (let i = 0; i < l_carnitina.length; i++) {
        if (palavra == l_carnitina[i]) {
            window.location.href = "../html/pagina_detalhes_L-carnitina.html";
            return true;
        }
    }
}

function procurarPorBetaAlanina() {
    for (let i = 0; i < beta_alanina.length; i++) {
        if (palavra == beta_alanina[i]) {
            window.location.href = "../html/pagina_detalhes_beta_alanina.html";
            return true;
        }
    }
}

function procurarPorMultivitaminico() {
    for (let i = 0; i < multivitaminico.length; i++) {
        if (palavra == multivitaminico[i]) {
            window.location.href = "../html/pagina_detalhes_multivitaminico.html";
            return true;
        }
    }
}

function procurarPorOmega3() {
    for (let i = 0; i < omega3.length; i++) {
        if (palavra == omega3[i]) {
            window.location.href = "../html/pagina_detalhes_omega3.html";
            return true;
        }
    }
}

function procurarPorColageno() {
    for (let i = 0; i < colageno.length; i++) {
        if (palavra == colageno[i]) {
            window.location.href = "../html/pagina_detalhes_colageno_hidrolisado.html";
            return true;
        }
    }
}

function procurarPorRoupas() {
    for (let i = 0; i < roupas.length; i++) {
        if (palavra == roupas[i]) {
            window.location.href = "../html/roupas.html";
            return true;
        }
    }
}

function palavraNaoEncontrada() {
    window.location.href = "../html/pagina_produto_nao_econtrado.html";
}