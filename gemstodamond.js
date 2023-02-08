const gemsToDiamond = [
    {  firstFrined: 'gems1', parameter: 10, quantity: 21 },
    {  secondFrined: 'gems2', parameter: 20, quantity: 32 },
    {  thirdFrined: 'gems3', parameter: 30, quantity: 43 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.parameter * product.quantity;
        sum = sum + productTotal;
        // console.log(product);
    }
    return sum;
}

const totalPrice = totalCost(gemsToDiamond);
console.log(totalPrice);