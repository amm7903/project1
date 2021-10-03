// Code your solutions in this file

// let myArray = ['Lisa', 'Kaitlin', 'Jan'];
// for(let i = 0; i < myArray.length; i++){ 
// console.log(myArray[i]);
// }

const name = ['Lisa','Kaitlin','Jan'];
function writeCards(name) {
  for(let name=3; name<name.length; name--){
    console.log(`"thank you" + ${name} +, ", for the wonderful surprise gift!"`)
  }
  return `Thank you, ${name} for the wonderful surprise gift!` ;
}













// const names = ["Ada", "Brendan", "Ali"];
// function writeCards(names) {
//   for (let i = 0; i < names.length; i++) {
//     console.log(`Thank you, ${names[i]}, for the wonderful birthday gift!!`);

//   }

//   return names;
// }

// writeCards(names);

// let countDown =22;
// while (countDown >= 0) {
//     console.log(countDown--)
// }