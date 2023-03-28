console.log("\nQuestion 1:");


let ages = [3, 9, 23, 64, 2, 8, 28, 93]; 



console.log("Question 1a: ", ages[ages.length - 1] - ages[0]); 



ages.push(100); 
console.log("Question 1b: ", ages); 


let sumOfAges = 0; 

for (let i = 0; i < ages.length; i++) {
  sumOfAges += ages[i]; 
  console.log("Question 1c: (Sum of Ages in for loop)", sumOfAges);
}

console.log("Question 1c (printing only sum): ", sumOfAges); 

let averageAge = sumOfAges / ages.length; 

console.log("Question 1c (average age): ", averageAge);

console.log("\nQuestion 2:");


let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];


let totalChars = 0; 

for (let i = 0; i < names.length; i++) {
  
  totalChars += names[i].length; 
  console.log(
    "Index #",
    i,
    "Question 2a (sum of chars per name: ",
    names[i],
    " count: ",
    names[i].length,
    "Adding characters:",
    totalChars
  );
}

let averageChars = totalChars / names.length; 
console.log("Question 2a (average chars): ", averageChars);


let concatNames = ""; 
for (let i = 0; i < names.length; i++) {
  concatNames = concatNames.concat(names[i]); 
  console.log("Question 2b (concat names in for loop): ", concatNames);
}
console.log("Question 2b (concat names): ", concatNames);

console.log("\nQuestion 3(Subtracting 1 from the length of an array gives the index of the last element of an array using which the last element can be accessed.) ");

console.log("\nQuestion 4(I can access the first element by the zero index. array[0]):");


console.log("\nQuestion 5:");


let nameLengths = []; 

for (let i = 0; i < names.length; i++) {
  
  console.log(names[i], "count: ", names[i].length);
  nameLengths.push(names[i].length);
console.log(
  "Question 5a (pushing chars count to nameLengths arr): ",
  nameLengths
);

console.log("\nQuestion 6:");

let charsTotal = 0; 
for (let i = 0; i < nameLengths.length; i++) {
  charsTotal += nameLengths[i]; 
  console.log("Question 6 (sum of chars in for loop): ", charsTotal);
}
console.log("Question 6 (total characters): ", charsTotal);

console.log("\nQuestion 7:");

function concatWords(word, n) {
  let solution = word.repeat(n);
  console.log("Question 7 (concat words): ", solution);
}
concatWords("hello", 3);

console.log("\nQuestion 8:");

function fullName(firstName, lastName) {
  let fullName = firstName + " " + lastName; 
  return fullName; 
}
console.log(fullName("Max", "Kaufmann"));

}

console.log("\nQuestion 9:");


let numbers1 = [100, 200, 400, 500, 1000]; 
let numbers2 = [10, 20, 4]; 

function sumNumbers2(array) {
  let total = 0; 
 
  for (let i = 0; i < array.length; i++) {
    total += array[i]; 
    console.log("Question 9 (sum of numbers in for loop): ", total);
  }

  if (total > 100) {
    console.log("Question 9 (sum is greater than 100): ", total, "vs ", 100);
    return true;
  } else {
    return false;
  }
}

const sumNumbers = (array) => {
  console.log("This is my arrow function");
  let total = 0; 
  for (let i = 0; i < array.length; i++) {
    total += array[i]; 
    console.log(
      " arrow function: Question 9 (sum of numbers in for loop): ",
      total
    );
  }
  
  if (total > 100) {
    console.log(
      "arrow function: Question 9 (sum is greater than 100): ",
      total,
      "vs ",
      100
    );
    return true;
  } else {
    return false;
  }
};

console.log("Question 9: ", sumNumbers(numbers1));
console.log("Question 9: ", sumNumbers(numbers2));

console.log("\nQuestion 10:");


let numbers3 = [100, 100, 100]; 
function calculateAverage(array) {
  let total = 0; 

  
  for (let i = 0; i < array.length; i++) {
    total += array[i]; 
    console.log("Question 10 (total in for loop): ", total);
  }
  console.log("Question 10 (sum of numbers): ", total);
  console.log("Question 10 (average): ", total / array.length);
}
calculateAverage(numbers3); 

console.log("\nQuestion 11:");


let numbers4 = [100, 100, 100];
let numbers5 = [100, 200, 500, 4]; 

function twoAverages(array1, array2) {
  let total1 = 0; 
  
  for (const number of array1) {
   
    total1 += number; 
    console.log("Question 11 (total1 in for loop): ", total1);
  }
  console.log("Question 11 (array 1 total): ", total1);
  let average1 = total1 / array1.length; 
  console.log("Question 11 (average1): ", average1);

 
  let total2 = 0; 

  
  for (const number of array2) {
    total2 += number; 
    console.log("Question 11 (array 2 total in for loop): ", total2);
  }
  let average2 = total2 / array2.length; 
  console.log("Question 11 (array 2 total): ", total2);
  console.log("Question 11 (average 2): ", average2);

  
  if (average1 > average2) {
    console.log("Question 11 (conditional): ", true);
  } else {
    console.log("Question 11 (conditional else): ", false);
  }
}
twoAverages(numbers4, numbers5); 


function willBuyDrink(isHotOutside, moneyInPocket) {
  let buyDrink = isHotOutside === true && moneyInPocket > 10.5; 
  return buyDrink; 
}
console.log(willBuyDrink(true, 11));

