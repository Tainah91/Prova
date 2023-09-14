function escreverNome(){
    let nome = document.querySelector ("#nome").value
    let resposta = document.querySelector("h2")
    resposta.innerHTML = `Olá ${nome} seja bem-vinda(o)`

}