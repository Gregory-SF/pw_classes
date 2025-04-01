// usar no meu
document.addEventListener("DOMContentLoaded", (event) =>{
    buscarInscritos();
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
    btnAlterarTema.textContent = btnAlterarTema.textContent == 'Light' ? 'Dark' : 'Light';
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