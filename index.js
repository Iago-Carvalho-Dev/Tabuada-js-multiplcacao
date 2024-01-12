
import entradadados from 'readline-sync';


let zenfone12 = {
    Marca:   'Asus',
    Modelo:  'Zen Fone Max Pro 2',
    Ano:     '2020',
    Preco:   '1200'

};

let iphone = {
    Marca:   'Aplle',
    Modelo:  'Iphone 7 plus',
    Ano:     '2020',
    Preco:   '1300'

};

let celular_estoque = [iphone.Modelo, zenfone12.Modelo];

console.log(` Os celulares dispovéis são: ${celular_estoque} `);

let escolha = entradadados.question('Digite o nome de um dos celulares disponivéis: ')
let produto_escolhido = ''

switch(escolha){
    case 'zenfone':
        produto_escolhido = zenfone12;
        console.log(` Descrição do aparelho:
        Marca:  ${zenfone12.Marca},
        Modelo: ${zenfone12.Modelo},
        Ano:    ${zenfone12.Ano},
        Preço:  $${zenfone12.Preco}
        `)
        break
    case 'iphone':
        produto_escolhido = iphone;
        console.log(` Descrição do aparelho:
        Marca:  ${iphone.Marca},
        Modelo: ${iphone.Modelo},
        Ano:    ${iphone.Ano},
        Preço:  $${iphone.Preco}
        `)
        break
};

let valor_produto = produto_escolhido.Preco;
//console.log(valor_produto)
let parcelas = entradadados.question('digite o número de parcelas:');
let pagamento = valor_produto / parcelas;
console.log(` Você pagará ${parcelas} parcelas no valor de ${pagamento} reais`);
    