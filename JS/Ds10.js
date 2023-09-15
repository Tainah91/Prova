function suaMaturidade(){
    let idade = parseInt(document.getElementById("idade").value);
    let resultado = document.getElementById("resultado");

    if(idade >= 0 && idade <= 11) {
        resultado.textContent = "Você é uma criança!👶🍼🍼";
    } else if (idade >= 12 && idade <= 17) {
        resultado.textContent = "VOcê é um adolecente!👦🧒";
    } else if (idade >= 18 && idade <= 64) {
        resultado.textContent = "Você é adulto!👩👨"
    } else if (idade >= 65) {
        resultado.textContent = "Você é um(a) idoso(a)!👵👴🧓";
    } else {
        resultado.textContent = "Idade Inválida. Não tente enganar o programa!💻📴"
    }

}