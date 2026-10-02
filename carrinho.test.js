const test = require('node:test');
const assert = require('node:assert');
const { calculartotalCarrinho } = require('./carrinho');

test('calcular o total do carrinho coorretamente', () => {
    const item = [
        { nome: 'Camiseta', preco: 50, quantidade: 2 },
        { nome: 'Bone', preco: 30, quantidade: 1 },
    ];
    
    const total = calculartotalCarrinho(item);

    assenrt.strictEqual(total, 130);
});

test ('carrinho vazio soma zero", () => {
    assenrt.strictEqual(calculartotalCarrinho([]), 0);
});