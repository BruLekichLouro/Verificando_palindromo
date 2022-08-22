let textoDigitado = document.getElementById("textoDigitado").value;

function verificaPalindromo(textoDigitado){
   
    let resultado= " ";
    if(!textoDigitado){
        resultado = "Digite alguma palavra";
        imprimeResultado(resultado);
    } else{
        for(let i = 0; i < textoDigitado.length / 2; i++){ //divido por 2 para verificar 2 caracteres ao mesmo tempo
            if(textoDigitado[i] !== textoDigitado[textoDigitado.length - 1 -i]){
                var texto = "Não é um palíndromo"
                imprimeResultado(texto);
            }else{
                resultado = "É um palindrmo"
                imprimeResultado(resultado);
            }
        }
    }
}
function imprimeResultado(texto){
    document.getElementById('resultado').innerHTML= texto;
}

console.log(verificaPalindromo("abba"));
console.log(verificaPalindromo("ola"));