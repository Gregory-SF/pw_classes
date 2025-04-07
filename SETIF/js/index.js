// usar no meu
document.addEventListener("DOMContentLoaded", (event) =>{
    buscarInscritos();

    // Perguntar pro frank o motivo da escolha de deixar essa função np dom content loaded 
    construirModal();
    salvarTemaAtual();
});

function construirModal(){
    const botaoSaibaMais = document.getElementById("saiba-mais");
    const botaoFecharModal = document.getElementById("fechar-modal");

    const modal = document.getElementById("modal");
    botaoSaibaMais.addEventListener("click", ()=>{
        modal.classList.remove("hidden");
    });

    botaoFecharModal.addEventListener("click", (e)=>{
        console.log(e.target);
        modal.classList.add("hidden");
    });
}

function salvarTemaAtual() {
    const temaLocal = localStorage.getItem("tema");
    document.body.setAttribute('data-theme',temaLocal);
    const btnAlterarTema = document.getElementById("btnAlterarTema");
    btnAlterarTema.textContent = temaLocal == 'light' ? 'Dark' : 'Light';
}

function alterarTema() {
    //DOM -> document object model
    const tema= document.body.getAttribute("data-theme");
    const novoTema = tema == 'dark' ? 'light' : 'dark';
    // let novoTema ='';
    // if(tema == 'dark'){
    //     novoTema = 'light';
    // } else {
    //     novoTema = 'dark';
    // }


    // para salvar coisas no banco de dados interno do site, usar para o portifólio
    localStorage.setItem("tema", novoTema);
    document.body.setAttribute('data-theme',novoTema);

    const btnAlterarTema = document.getElementById("btnAlterarTema");
    btnAlterarTema.textContent = btnAlterarTema.textContent == 'Light' ? 'Dark' : 'Light';
}

let idiomaAtual = "pt";

function alterarIdioma(){
    idiomaAtual = idiomaAtual == "pt"? "en": "pt";
    carregarIdioma(idiomaAtual);
}

function carregarIdioma(idioma) {
    fetch(`json/${idioma}.json`)
    .then(data => data.json())
    .then(data => {
        traduzirPagina(data);
    });

}

function traduzirPagina(linguagem) {
    document.querySelectorAll("[data-i18n]").forEach(elemento =>{
        console.log(elemento);
        const chave = elemento.getAttribute("data-i18n");
        console.log(chave);
        if(linguagem[chave]){
            elemento.textContent = linguagem[chave];
        }
    });

    /// PARA IMAGENS
    document.querySelectorAll("[data-i18n-alt]").forEach(elemento =>{
        console.log(elemento);
        const chave = elemento.getAttribute("data-i18n-alt");
        console.log(chave);
        if(linguagem[chave]){
            elemento.setAttribute("alt", linguagem[chave]) ;           
        }
    });
}

// function buscarInscritos() {
//     fetch("json/inscritos.json").then(res => {
//         console.log(res.json());
//     });
// };

function buscarInscritos() {
    fetch("json/inscritos.json")
    .then(res => res.json())
    .then(res => {
        const divInscritos = document.getElementById('inscritos');
        res.forEach(user => {
            const novoParagrafo = document.createElement("p");
            novoParagrafo.textContent = `Nome:${user.nome}`;        
            divInscritos.appendChild(novoParagrafo);
        })
    });
};