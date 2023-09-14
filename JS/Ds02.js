function valorDobro(){
    let numero = parseFloat(document.getElementById("numero").value)
    let dobro = numero * 2
    document.getElementById("resultado").textContent = `O dobro de ${numero} é igual a ${dobro}.`
}