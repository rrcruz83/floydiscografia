const cadastro = document.getElementById('cadastro-form');
const lista = JSON.parse(localStorage.getItem("lista")) || [];
const botao_exclusao = document.getElementById("rodape-logo")

cadastro.addEventListener("submit", (evento) => {
    evento.preventDefault();
    salvaCadastro(evento)
})

function salvaCadastro(evento) {
    const integrantes = evento.target.elements["integrantes"].options
    const listaIntegrantes = [];

    const dataLancamento =  moment(evento.target.elements["ano-lancamento"].value).format('DD-MM-YYYY');
    const dataGravacao =  moment(evento.target.elements["ano-gravacao"].value).format('DD-MM-YYYY');
    
    for (let i = 0; i < integrantes.length; i++) {

        if(integrantes[i].selected) {
            listaIntegrantes.push(integrantes[i].textContent);
        }
    }    

    itemNovo = {
       "Categoria": evento.target.elements["categoria"].value,
       "Formato": evento.target.elements["formato"].value,
       "Capa": evento.target.elements["cover"].value,
       "Nome": evento.target.elements["nome"].value,
       "Local de Gravação": evento.target.elements["local-gravacao"].value,
       "Ano de Gravação": dataGravacao,
       "Integrantes": listaIntegrantes,
       "Descrição": evento.target.elements["descricao"].value,
       "Lançamento": dataLancamento
    }
    lista.push(itemNovo);
    localStorage.setItem("lista", JSON.stringify(lista));
    location.reload();
}

botao_exclusao.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
})

