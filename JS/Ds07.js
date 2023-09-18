function IMC() {
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var m = peso / altura * altura;
    parseFloat(altura);
    parseFloat(peso);

        if (m < 16){
            var i = 'Baixo peso muito grave';
        } else if (m > 16 && m < 16.99) {
            var i = 'Baixo peso grave';
        } else if (m > 17 && m < 18.49) {
            var i = 'Baixo peso';
        } else if (m > 18.50 && m < 24.99) {
            var i = 'Peso normal';
        } else if (m > 24 && m < 29.99) {
            var i = 'Sobrepeso';
        } else if (m > 30 && m < 34.99) {
            var i = 'Obesidade de primeiro grau';
        } else if (m > 35 && m < 39.99) {
            var i = 'Obesidade de segundo grau'; 
        } else if (m > 40) {
            var i = 'Obesidade de terceiro grau';
        }
        document.write(nome + " possui indice de massa corporal igual a " + m + "sendo classificado como" + i);
        }