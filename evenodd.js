function evenOdd (evenodd);
while (evenodd <= 2) {
    console.log(evenodd);
    // evenodd++;
    evenodd = evenodd + 2;
}


// totalMark = evenOdd('jack ma');
// console.log(totalMark);

// function evenOdd(number) {
//     while (let i = 1; i < number.length; i++){
//         const even = number + [i];
//         return even
//     }
   
// }

// totalMark = evenOdd('jack ma');
// console.log(totalMark);


function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }

    // else {
    //     const first100Price = 100 * first100Rate;
    //     const second100Price = 100 * second100Rate;
    //     const restTicketQuantity = ticketQuantity - 200;
    //     const restTicketPrice = restTicketQuantity * restTicketRate;
    //     const totalPrice = first100Price + second100Price + restTicketPrice;
    //     return totalPrice;
    // }
}
const totalPrice = ticketPrice(10);
console.log('price', totalPrice);