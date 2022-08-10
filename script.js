function verificaPalindromo(string){
    if(!string) return "String inexistente";

    for(let i = 0; i < string.length / 2; i++){ //divido por 2 para verificar 2 caracteres ao mesmo tempo
        if(string[i] !== string[string.length - 1 -i]){
            var texto = "Não é um palíndromo"
            return false;
            
        }
    }
    return true;
}
console.log(verificaPalindromo("abba"));
console.log(verificaPalindromo("ola"));