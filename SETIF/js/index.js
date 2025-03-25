document.addEventListener("DOMContentLoaded", (event) =>{
    buscarInscritos();
});

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
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res => {
        const divInscritos = document.getElementById('inscritos');
        res.forEach(user => {
            const novoParagrafo = document.createElement("p");
            novoParagrafo.textContent = `Nome:${user.name}`;        
            divInscritos.appendChild(novoParagrafo);
        })
    });
};