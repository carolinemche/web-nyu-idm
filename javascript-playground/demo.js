// An array is a special variable, which can hold more than one value at a time.
// Understanding the difference between let & var: It can be said that a variable declared with var is defined throughout the program (function scoped) as compared to let (which is block scoped). A function can contain many blocks.
// watch later: https://www.youtube.com/watch?v=XgSjoHgy3Rk

let namesArray = ['Kevin','McCoy','Emily','Frederic','Alisha','Ashli','Simon','Ty','Fiona','Prismo','Sammy','Caroline','Francesca','Karl','Esther','Irene','Martin','Yanxin','Katrina','Kiana'];

// console.log(namesArray[0]);
//arrays start from 0 no one

//function to get a random number
function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max));

}

// console.log(getRandom(3));
//expected output is 0, 1,or 2 (not 3)

//gets a random number within the length of nameArray
let n = getRandom(namesArray.length);

// console.log(n);
//prints a random name
let randomName = namesArray[n];
console.log(randomName);


let arrayAsString = namesArray.join(", ")
//prints all names
console.log(arrayAsString)

//sorts name array
let sortedNames = namesArray.sort();
console.log (sortedNames);

let text = "";

//loop that iterates through all the names
for (i = 0; i < namesArray.length; i++){
  //adds name of current index to the text and making a new line
  text += namesArray[i] + " " + i +"</br>";
}

$('#listNames').html(text);

// puts all names in the array on website/as html
// $('#names').html(arrayAsString);

// puts random name on website/as html
// $('#name').html(randomName);
