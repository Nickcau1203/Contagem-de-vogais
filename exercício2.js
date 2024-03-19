let vogais = ['a', 'e', 'i', 'o', 'u'];   

let texto = "Nicole Cau";

texto = texto.toLowerCase();

let arrayLetras = texto.split('');

let arrayVogais = [];

for(let i = 0; i < arrayLetras.length; i++){
    if(vogais.includes(arrayLetras[i])){
        arrayVogais.push(arrayLetras[i]);
    }
}
    

console.log("Texto original:" + texto);
console.log("Vogais encontradas:" + arrayVogais.toString());
console.log("Total de vogais: " + arrayVogais.length);

