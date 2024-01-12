import coletar from 'readline-sync';

let numero = coletar.question('Digite um numero entre 0 e 9:   ');

console.log(` Tabuada de Multiplicação do número ${numero} `);

for(let contador = 0; contador <= 10; contador++){

    
    let multiplicacao = numero * contador;


    console.log(` o resultado de ${numero} x ${contador} = ${multiplicacao};  `);

};

    console.log( ` A parcela ${i} será de ${preco} `)
; 