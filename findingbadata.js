// function findingBadData(number) {
//     for (var i = 0; i < number.length; i++){
//         const age = number[i];
//         return age;
//     }
// }

let numbers= [12, -14, 54, -20, -30, 55, -15, -40]
function findingBadData(){
   let emptyArray = [];
   for (i = 0; i < numbers.length; i++){
      if (numbers[i] <0) {
         emptyArray.push(numbers[i]);
      }
   }
   return emptyArray;
}
console.log(findingBadData());

