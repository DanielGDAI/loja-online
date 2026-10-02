function calcularTotal(item) {
    if (!Array.isArray(item)) {
        throw new Error("Input must be an array");
    }
   
    return item.reduce((total, item) => {
return total + item.preco * item.quantidade;
}, 0); 
}

module.exports = {calcularTotalCarrinho };

