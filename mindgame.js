// function  mindGame(number) {
//     var pixt = number * 3;
//     var pixt2 = pixt + 10;
//     var pixt3 = pixt2 / 2;
//     var pixt4 = pixt3 - 5;
//     console.log(pixt4);
// }
// mindGame(10);



let numbers = [12, -23, 45, -54, -53, 13, -45, 99, -33];
function findingBadData() {
    let emptyArray = [];
    for (i = 0; i < numbers.length; i++){
        if (numbers[i] < 0) {
            emptyArray.push(numbers[i]);
        }
    }
    return emptyArray;
}
console.log(findingBadData());