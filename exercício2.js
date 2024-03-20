let vogais = ['a', 'e', 'i', 'o', 'u'];   

let texto = "Nicole Cau";

texto = texto.toLowerCase();

let arrayletras = texto.split('');

let arrayvogais = [];

for(let i = 0; i < arrayLetras.length; i++){
    if(vogais.includes(arrayLetras[i])){
        arrayVogais.push(arrayLetras[i]);
    }
}
    

console.log("Texto original:" + texto);
console.log("Vogais encontradas:" + arrayVogais.toString());
console.log("Total de vogais: " + arrayVogais.length);




let consoantes = ['b', 'c', 'd', 'f', 'g', 'h',  'j', 'k',  'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'w', 'z'];

let Texto = "Nicole Cau";

texto = texto.TolowerCase();

let Letras = texto.split('');

let arrayconsoantes = [];

for(let i = 0; i < arrayLetras.length; i++){
    if(consoantesonsoantes.includes(arrayLetras[i])){
        arrayCogais.push(arrayLetras[i]);
    }
}

console.log("Texto original:" + texto);
console.log("Consoantes encontradas:" + arrayConsoantes.toString());
console.log("Total de consoantes: " + arrayConsoantes.length);


let Vogais = ['a', 'e', 'i', 'o', 'u'];

let Consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

let espaços = [" "];

let texto = "Nicole Cau";

texto = texto.toLowerCase();

let arrayLetras = texto.split('');

let arrayVogais = [];

let arrayConsoantes = [];

let arrayEspacos = [];

for(let i = 0; i < arrayLetras.length; i++){
  if(vogais.includes(arrayLetras[i])){
    arrayVogais.push(arrayLetras[i]);
  }
}

for(let i = 0; i < arrayLetras.length; i++){
  if(consoantes.includes(arrayLetras[i])){
    arrayConsoantes.push(arrayLetras[i]);
  }
}

for(let i = 0; i < arrayLetras.length; i++){
    if(espacos.includes(arrayLetras[i])){
      arrayEspacos.push(arrayLetras[i]);
    }
  }
  
console.log("Texto original:", texto);
console.log("Consoantes encontradas:", arrayConsoantes.toString());
console.log("Total de Consoantes:" + arrayConsoantes.length);
console.log("Vogais encontradas:", arrayVogais.toString());
console.log("Total de Vogais:" + arrayVogais.length);
console.log("Espaços encontrados:", arrayEspacos.toString());
console.log("Total de Espaços:" + arrayEspacos.length);