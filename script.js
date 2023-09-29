// CHAPTER 01 (Alerts);
// Question no 1
// alert("Aisha");      // |
// alert("Siddiqua");    // ||
// alert("abc@gmail.com"); // |||
// alert("Mypassword");   // |V
// alert("03012069743");   //  V
// // Question no 2
// alert("You're learning JavaScript!");
// // Question no 3
// alert("Welcome to our site");
// // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
//CHAPTER 02 (Variables for string)
//Question no 1
// var camelCase ;
// // Question no 2
// var myChoiceVariable;
// myChoiceVariable = "My_Choice";
// // Question no 3
// var teamName = "myTeamName";
// alert(teamName);
// // Question no 4
// var bestMan = "Thomas";
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
//CHAPTER 03 (Variables for numbers)
//Question no 1
// var caseQty;
// //Question no 2
// caseQty = 144;
// //Question no 3
// var num = "9"
// parseInt(num)   // for make it useable in math operation
// //Question no 4
// var sum;
// sum = 2+4     // output 6
// // Question no 5
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// document.write(orderTotal);     // output will be 110;
// Question no 6
// var assignNumber = 5;
// assignNumber = 5+5;     // output 10
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
//CHAPTER 04 (Variables name legal and illegal)
// //Question no 1
// var productCost = 3.45;
// //Question no 2
// var nameOfBand ;
// //Question no 3
// var legallyNamedVariable = 5;
// //Question no 4
// var fullName = "Aisha Siddiqua";
// Question no 5
// Legal Variables 
// var myVariable;
// var _privateVar;
// var $price;
// var counter123;
// var camelCase;
// var PascalCase;
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Illegal Variables
// var 123variable;      // Starts with a digit
// var my variable;      // Contains a space
// var special@char;     // Contains a special character
// var if;               // Reserved keyword

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//CHAPTER 05 (Math Expression |)
//Question no 1
// Modulus %
// Question no 2
// var num = 20%6;
// console.log(num);        //2
//Question no 3
// var largeNum = 2000000;        // 1000x2000=>2000000
// //Question no 4
// var subractedValue01 = 600;
// var subractedValue02 = 100;
// var subtractBothValues = subractedValue01 - subractedValue02;
// // Question no 5
// var dividend = 20;
// var divisor = 6;
// var remainder = dividend%divisor;
// //Question no 6
// alert(2*2);   // Output 4
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//CHAPTER 06 (Math Expression  ||)
//Question no 1
// var x = 4
//  x++;  // legal expression one
// console.log("Value after post increament",x);
// ++x;  // legal expression one
// console.log("Value after pre increament",x);
//Question no 2
// var x2 = 100;
// --x2;  //fastest way to reduce it to 99
// console.log(x2)  ;
// Question no 3
// var x = 50;
// var y = x++;
// console.log(y)
// value of y will be 50 beacuse it is doing post increament
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// //Question no 4
// var y = 50;
// var z = --y;
// // value of z will be 49 beacuse it is doing pre increament
// // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// //Question no 5
// var num = 1;
// var newnum = num--;
// Question no 6
// var num = 1+1;
// var anotherNum = num;
// Question no 7
// var num= 9;
// num++;
// alert(num);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 07 (Math Expression III)
// Question no 1
// var calculatedNum = 2 + (2 * 6);
//Output value will be 14;
//  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Question no 2
// var calculatedNum = (2 + 2) * 6;
// console.log(calculatedNum);
// Output value will be 24;
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Question no 3
// var calculatedNum = (2 + 2) * (4 + 2); 
// Output value will be 24;
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Question no 4
// var calculatedNum = ((2 + 2) * 4) + 2;
// // Output value will be 18;
// // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// // Question no 5
// var calculatedNum = (2+2+10)*4;   //OUtput value will be 56
// Question no 6
// var calculatedNum = (2+2*4)+10;   //Output value will be 20
// Question no 7
// var calculatedNum =  4/(4 * 2) ;  //it can bring the output value 0.5 but can't 5
// for producing 5 we have to make changes in calculation as below
// var calculatedNum = (4*5)/4;     //it's output value will be 5
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 08  (Concatenating Text Strings)
// Question no 1
// var num = "2" + "2";    // num value wil be 22;
// // Question no 2
// var message = ("Hello," + "Dolly");
// alert(message);    //Output will be Hello, Dolly
// Question no 3
// alert("33" + 3);   // Output will be 333
// Question no 4
// alert("Pakistan"+" Zindabad");
// Question no 5
// var user = "Hello "+14;
// console.log(user);
// Question no 6
// var firstName = "Aisha";
// var lastName = "Siddiqua";
// var result = firstName+" "+lastName;
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 09 (Prompts)
// Question no 1;
// var firstName = prompt("Enter your first Name?");
// alert(firstName);
// Question no 2;
// var country = prompt("Country?", "China");   //Default
// alert(country);
// // Question no 3
// var yourName = prompt("Enter Your Name");
// Question no 4
// var isTrue = prompt("Do you want to exit ?","True");
// Question no 5
// var message = "please enter your city";
// var DefaultMessage = "Karachi";
// var result =  prompt(message,DefaultMessage);
// Question no 6
// var message = "please enter your city";
// var DefaultMessage = "Karachi";
// var result =  prompt(message,DefaultMessage);
// alert(result);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 10 (if statments)
// Question no 1
//  var city = "Karachi"
// if (city = "Karachi") {
// console.log("The City OF Lights")
// }
// Question no 2
// var x = "Abcd";
// var y = "Abcd"
// if (x === y) {
//     var z = prompt("Enter the value of z?");
//   }
// Question no 3
// var ZipCode = prompt("Enter your ZipCode?");
// if(ZipCode ==="10010"){
//     alert("Karachi")
// } else{
//     alert("Please write correct city")
// }
// Question no 4
// var x= 5;
// if(x === 5){
//     x = 10;
// }
// alert(x)
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 11 (Comparison  Operators)
// Question no 1
// var x =5;
// var y = 10;
// if(x != y){
//     alert("Its value is unequal")
// }
// Question no 2
// var x =5;
// var y = 10;
// if(x >= y){

// }
// Question no 3
// var x = 5;
// if(x != 10){
//   x =10  
// }
// Question no 4
// var x = 4;
// if(x!=5){
//     alert("Congratulations")
// };
// Question no 5
// var firstName = prompt("ENTER YOUR FIRST NAME ?");
// if(firstName != "ABCD"){
//     alert("NO match")
// };
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 12 (if…else and else if   statements)
// Question no 1
// var x = 10;
// var y = 20;
// if(x >= y){
//     alert("congratulation")
// }else{
//     alert("value of x is less than value of y")
// };
// Question no 2
// var totalMarks = +prompt("Enter your total marks");
// var percentage = (totalMarks*100)/500;
// var grade;
// if (percentage >= 90) {
//     grade = "A+";
//   } else if (percentage >= 80) {
//     grade = "A";
//   } else if (percentage >= 70) {
//     grade = "B";
//   } else if (percentage >= 60) {
//     grade = "C";
//   } else if (percentage >= 50) {
//     grade = "D";
//   } else {
//     grade = "Fail";
//   }
// alert("Grade: " + grade);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Question no 3
// var a = 5;
// if (a === 10) {
//     alert("a is 10");
// }else{
//     alert("Correct the value of a")
// }
// Question no 4
// var city = prompt("ENter yor city");
// if(city === "karachi"){
//     alert("acknowledging it is Karachi")
// }else if(city === "lahore"){
//     alert("acknowledging it is lahore")
// }else{
//     alert("invalid City")
// }
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 13  (Testing sets of  conditions)
// Question no 1
// var a = "ab";
// var b ="ab";
// var c = "cd";
// var d = "cd"
// if(a===b &&c===d){}
// Question no 2
// var name = prompt("Enter your name?");
// var age = +prompt("Enter your age ?");
// if(name === "Arsalan" && age === 60){}
// Question no 4
// var x = 4;
// var y = 44
// if(x<y || x>y){
//     alert("cORRECT");
// };
// QUESTION NO 5
// var firstName = "Aisha"
// var lastName = "Siddiqua";  
// var userFirstName = prompt("Enter your first name:");
// var userLastName = prompt("Enter your last name:");
// if (userFirstName === firstName && userLastName === lastName) {
//   alert("Name match found! Welcome, " + firstName + " " + lastName + "!");
// } else {
//   alert("Name match not found");
// };
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 14 (If statements nested)
// Question no 1
// var password = prompt("Enter your password:");
// if (password !== "") {
//   if (password.length <= 5) {
//     alert("Password must be greater than 5 characters");
//   } else {
//     alert("OK");
//   }
// } else {
//   alert("Password cannot be empty");
// }
// Question no 2
// var a = 1;
// var c = Max;
// if (a === 1) {
//     if (c === "Max") {
//      alert("OK");
//      }
//     }    
// Question  no 3
// if(a === 1 && c ==="Max"){}
// Question no 4
// var a = 2;
// var b = 2;
// if(a === b){
// if (a <= b) {
//     alert("MAtched the condition.");
// }
//     }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 15(Array |)
// Question no 1
// var arr = [];
// Question no 2
// var arr = ["1"];
// Question no 3
// var alphabet = ["h","i","j","k"];
// console.log(alphabet[2]);
// Question no 4
// var alphabet=["h","i","j","k", "l","m", "n", "o"];
// console.log(alphabet.length)
// qUESTION NO 5
// var arr = ["AIsha"];
// arr[1]= "Siddiqua";
// alert("second element is "+arr[1]);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 16 (Array II)
// Question no 1
// var arr =[1];
// arr.push(2);;
// alert("The last element is "+arr[1]);
// Question no 2
// var Alphabet=["h","i","j","k"];
// Alphabet.pop();
// Question no 3
// var Alphabet=["h","i","j","k"];
// Alphabet.push("l");
// Alphabet.push(10);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 16 Array (|||);
// Question no 1
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();
// // Question no 2
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(05)
// sizes.unshift(10)
// sizes.unshift(20);
// document.write(sizes);
// Question no 3
// var arr = [1];
// arr.unshift(0);
// Question no 4
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2,0,"L");
// console.log(sizes)
// Question no 5
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = ["S", "M", "XL"];
// Question no 6
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1,3,"pigeon","camel");
// console.log(pets)
// Question no 7
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1,2);
// console.log(pets);
// Question no 8
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var  reduceArray = pets.slice(3, 5);
// console.log(reduceArray); 
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER NO 17 - 20 (for Loops)
// question no 1
// for(var i = 1;i<=10;i++){
//     console.log(i+" time");
    
// }
// Question no 2
// for (var i = 0; i <= 12; i++) {
//     console.log(i)
// }
// Question no 3
// for(var i=0;i<= 4 ;i++){   
// }
// Question no 4
// for (var count = 0; count < 100; count++) {
// }
// Question no 5
// for (var i = 3; i > 0; i--) {
//     console.log(i)
// }
// Question no 6
// var array = [1, 2, 3, 4, 5];
// var numberOfElements = array.length;
// console.log(numberOfElements)
// Question no 7
// var flag = true;
// Question no 8
// var pet = ["dog", "cat", "ox", "duck", "frog", "flea"];
// for (var i = 0; i < pet.length; i++) {
//     console.log(pet[i])
// }
// Question no 9
// for (var i = 1; i < 10; i++) {
//     if (i === 2) {
//       alert("It should be 1 ");
//       break;
//     }
//   }
//   Question no 10
// Create an array containing user names
// var userNames = ["Aisha", "Riyaz", "Risha", "Ahmed", "Hamzah"];
// var firstName = prompt("Enter first name:");
// for (var i = 0; i < userNames.length; i++) {
//   if (userNames[i] === firstName) {
//     alert("Welcome, " + firstName + "!");
//     break; 
//   } else {
//     alert("Invalid Name");
//   }
// }
// Question no 11
// var matchFound = false;
// var userInput = prompt("Enter your item");
// var list = ['cake','pie','ice cream','coffe','waffle']
// for (var i = 0; i < list.length; i++) {
//     if (userInput === list[i]) {
//     alert("Match found");
//     matchFound = true;
//     break;
//     }
//    };
// Question no 12
// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];
// for (var i = 0; i < firstArr.length; i++) {
//   for (var j = 0; j < secondArr.length; j++) {

//     console.log(firstArr[i] + secondArr[j]);
//   }
// }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 21 (Changing Case);
// Question no 1
// var userInput = prompt("Enter your name")
// var allLower = userInput.toLowerCase();
// console.log(allLower)
// Question no 2
// var x = "Hello World";
// x = x.toLowerCase();
// console.log(x)
// Question no 3
// var x = "Hello World";
// x = x.toUpperCase();
// console.log(x)
// Question no 4
// var x = "welcome to our site";
// var result = x.toLowerCase();
// console.log(result)
// Question no 5
// var arr = ['A'];
// var lowerCase = arr[0].toLowerCase();
// console.log(lowerCase)
// Question no 6
// var city = "Karachi";
// city= city.toUpperCase();
// alert("UpperCase version =>"+city)
// Question no 7
// var cityName = "kaRacHi"
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// console.log(capitalizedCityName); 
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER Chapter 22 - 25 (Strings)
// Question no 1
// var sameWords = "captain";
// // var slicedPart = sameWords.slice(1, 3);
// console.log(slicedPart); 
// Question no 2
// var userInput = "Hello, World!";
// var numOfChr = userInput.length;

// console.log(numOfChr); 
// QUESTION NO 3
// var animal ="elephant";
// var seg = animal.slice(1, 5);
// console.log(seg);
// Question no 4
// var userVar = "welcome to our site";
// var numberOfCharacters = userVar.length;
// console.log(numberOfCharacters)
// Question no 5
// var myString = "HelloWorld";
// var numberOfCharacters = myString.length;
// var newString = myString.slice(1, -3);
// console.log("Number of characters:", numberOfCharacters);
// console.log("Sliced string:", newString);
// Question no 6
// var text = "To be or not to be.";
// var indx = text.indexOf("be"); // Output value will be 3
// Question no 7
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be")// Output value will be 16
// Question no 8
// var text = "Let's go to the park and then go grab some ice cream go to home.";
// var searchString = "go";
// var lastIndex = text.lastIndexOf(searchString);
// if (lastIndex !== -1) {
//   console.log("Index of the first character of the last instance of 'go':", lastIndex);
// } else {
//   console.log("The string 'go' was not found in the text.");
// }
// Question no 9
// var myString="hello";
// var indexNum = 1
// if (myString.charAt(indexNum)) {

//   }
  
// Question no 10
// var myString = "abcde";
// console.log(myString.charAt(2))
// Question no 11
// var text = "Welcome dear customer to our site.";
// var cha = text.charAt(9)
//  console.log(cha);
// Question no 12
// var str = "Hello, World!";
// var x = str.charAt(str.length - 1);
// console.log(x); 
// Question no 13
// var input = "This,is,as,ample,input.";
// var cha = input.charAt(4); // Note that JavaScript uses 0-based indexing
// console.log(cha); 
// Question no 14
// var myString = "example";
// if (myString.charAt(2) === 'a') {
// }
// Question no 15
// var inputString = "Hello";
// var charArray = [];

// for (var i = 0; i < inputString.length; i++) {
//   charArray.push(inputString.charAt(i));
// }
// console.log(charArray); // Output: ["H", "e", "l", "l", "o"]
// var reply = "No, thank you. I said no!";
// var revisedReply = reply.replace("no", "yes");
// console.log(revisedReply); // Output: "Yes, thank you. I said no!"
// Question no 16
// var str = "1"
// var newStr = str.replace("1", "one");
// console.log(newStr);
// Question no 17
// var x = "apple apple apple";
// var y = x.replace(/a/g, "z");// globally replace
// console.log(y);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 26 (Rounding Numbers);
// Question no 1
// var numberToRound = 5.6;
// var roundedNumber = Math.round(numberToRound);
// console.log(roundedNumber); 
// Question no 2
// var  origNum = 13.6;
// var roundedNumber = Math.round(origNum)
// console.log(roundedNumber)
// Question no 3
// var origNum = 5.6;
// var roundNum = Math.floor(origNum);
// console.log(roundNum); // Output: 5
// Question no 4
// var origNum = 5.6;
// var roundNum = Math.round(origNum);
// console.log(roundNum); 
// // Question no 5
// var origNum = 0.5;
// var roundNum = Math.floor(origNum);
// console.log(roundNum);  //Output will be 0
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER NO 27 (Random Numbers)
// Question no 1
// var randomNum = Math.floor(Math.random() * 50) + 1;
// Question no 2
// var randomNum = Math.random();
// Question no 3
// function rollDie() {
//     return Math.floor(Math.random() * 6) + 1;
//   }
//   var result = rollDie();
//   console.log("You rolled a " + result);
// Question no 4
// Function to simulate a coin toss
// function coinToss() {
//     var randomNumber = Math.random(); 
//     if (randomNumber < 0.5) {
//       return "Heads";
//     } else {
//       return "Tails";
//     }
//   }
//   var result = coinToss();
//   console.log("The coin landed on: " + result);
//   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER  28, 29 (Converting Strings)
// Question no 1
//   var userInput ="12345678910";
//   userInput = parseInt(userInput)
//   console.log(typeof userInput)
// Question no 2
// function stringToInteger(str) {
//     return parseInt(str);
//   }
//   var str = "123";
//   var integerNumber = stringToInteger(str);
//   console.log(integerNumber+"Type of str will be now "+ typeof integerNumber); 
//   Question no 3
// var str = "31.14";
// var floatNumber = parseFloat(str);
// console.log(floatNumber); // Output: 3.14;
// Question no 4
// var str = "23r";
// console.log(typeof str);
// Question no 5
// var number = 42;
// var str = number.toString();
// console.log("The type of str will be now "+typeof str); // Output: "42"
// Question no 6
// function numberToString(number) {
//     return number.toString();
//   }
//   var num = 42;
//   var str = numberToString(num);
//   console.log("Now the type of str will be "+typeof str); 
//   Question no 7
// var str = "3.14";
// var integerNum=parseFloat(str);
// integerNum = Math.round(integerNum)
// console.log(integerNum)
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER  30 (Controlling the length of decimals)
// // Question no 1
// var num = 4.52345676236543;
// num = Math.round(num);
// num = Math.round(num);
// num = Math.round(num);
// num = Math.round(num);
// var newNum = num.toString();
// console.log(newNum+" Type of num now will be "+typeof newNum)
// Question no 2
// var num = 45.634435;
// num = Math.round(num)
// num = Number(num.toFixed(2));
// console.log(num+ " Type of num will be "+ typeof num);
// num = num.toString();
// console.log(num+ " Type of num will be "+ typeof num);
// Question no 3
// var num = 45.634435;
// num = Math.round(num)
// num = Number(num.toFixed(2));
// num = num.toString();
// var numLength = num.length
// if(numLength === 4){

// }
// Question no 4
// var originalNumber = 3.14159265359;
// var roundedNumber = originalNumber.toFixed(2); 
// alert("Rounded to 2 decimal places: " + roundedNumber);
// CHAPTER 31 - 34 (Date & Time)
// Question no 1
// var dObj = new Date() 
// console.log(dObj);
// Question no 2
// var newDate = new Date();
// var str = newDate.toString();
// console.log(str);
// Question no 3 
// var d = new Date();
// var day = d.getDay()
// console.log(day);
// Question no4
// var d = new Date();
// var day = d.getDay();
// var dayNames=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
// if(day === 1 ){
//     alert("Today is "+dayNames[0])
// }else if(day === 2){
//     alert("Today is "+dayNames[1])
// }else if(day === 3){
//     alert("Today is "+dayNames[2])
// }else if(day === 4){
//     alert("Today is "+dayNames[3])
// }else if(day === 5){
//     alert("Today is "+dayNames[4])
// }else if(day === 6){
//     alert("Today is "+dayNames[5])
// }else if(day === 0){
//     alert("Today is "+dayNames[6])
// }else{
//     alert("Invalid day")
// }
// Question no 5

// var currentDate = new Date(); // Create a Date object for the current date and time

// var year = currentDate.getFullYear(); 
// var month = currentDate.getMonth() + 1; 
// var day = currentDate.getDate(); 
// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();
// var seconds = currentDate.getSeconds(); 
// var milliseconds = currentDate.getMilliseconds();

// console.log("Year:", year);
// console.log("Month:", month);
// console.log("Day:", day);
// console.log("Hours:", hours);
// console.log("Minutes:", minutes);
// console.log("Seconds:", seconds);
// console.log("Milliseconds:", milliseconds);
// Question no 6
// var later = new Date(2020, 11, 31);
// console.log(later);
// Question no 7 
// var later = new Date(1992, 1,2);
// console.log(later);
// Question no 8
// var referenceDate = new Date(1980, 0, 1); 
// alert("Milliseconds elapsed between reference date and the beginning of 1980 are  => : " + referenceDate.getTime());
// Question no 9
// var date = new Date();
// date.setFullYear(2019); 
// console.log(date);

// Question no 10
// function changeMonth(newDate) {
//     var newDate = new Date();
//     newDate.setMonth(0);
//     console.log(`month has been successFuly changed to January`)
   
//     return newDate
// }
// var currentDate = new Date();
// var originalDate = changeMonth(currentDate);
//    console.log(originalDate)
// Question no 11
// function changeDayOfWeek(originalDate, newDayOfWeek) {
//     var daysToAdd = newDayOfWeek - originalDate.getDay();
//     var newDate = new Date(originalDate);
//     newDate.setDate(originalDate.getDate() + daysToAdd);
//     return newDate;
//   }
//   var originalDate = new Date(); 
//   var newDate = changeDayOfWeek(originalDate, 5);
//   console.log("Original Date:", originalDate.toDateString());
//   console.log("Updated Date (Day of the week changed):", newDate.toDateString());
//   Question no 12
// function changeMinutesToSpecificValue(inputTime) {
//     var hours = inputTime.getHours();
//     var newMinutes = prompt("Enter the new minutes:");
//       newMinutes = parseInt(newMinutes);
//       var newTime = new Date(inputTime);
//       newTime.setHours(hours, newMinutes);

//       return newTime;
//     }
//   var originalTime = new Date(); 
//   var updatedTime = changeMinutesToSpecificValue(originalTime);
//   console.log("Original Time:", originalTime);
//   console.log("Updated Time:", updatedTime);
// Question no 13
// function addHoursToTime(inputTime, hoursToAdd) {
//     var newTime = new Date(inputTime);
//     newTime.setHours(inputTime.getHours() + hoursToAdd);
//     return newTime;
//   }
//   var originalTime = new Date(); 
//   var hoursToAdd = 10; 
//   var updatedTime = addHoursToTime(originalTime, hoursToAdd);
//   console.log("Original Time:", originalTime);
//   console.log("Updated Time (After adding " + hoursToAdd + " hours):", updatedTime);
//   Question no 14
// function ageCalculator(userBirthYear) {
//     var date = new Date();
//     var currentYear = date.getFullYear()
//     var exactAge = currentYear -  userBirthYear
//     alert(`You are now ${exactAge}`)
// }
// var userBirthYear = +prompt("Enter your birth year");
// ageCalculator(userBirthYear)
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 35 - 37 (Functions)
// Question no 1
// function displayAlert() {
//     alert("Welcome dear user to our site !")
// }
// displayAlert();
// Question no 2
// function askName() {
//     var userName = prompt("Enter your name");
//     alert("Welcome "+userName)
    
// };
// askName();
// Question no 3
// function Add(num1,num2) {
//     return num1 + num2
// }
// function Subtract(snum1,snum2) {
//     return snum1 - snum2
// }
// function twoFunctions(num1,num2,snum1,snum2) {
//     var addition = Add(num1 ,num2)
//     var subtraction = Subtract(snum1 ,snum2)
//     console.log(`The Result of addition is ${addition}`)
//     console.log(`The Result of subtraction is ${subtraction}`)
// };
// var num1 = +prompt("Enter your first number for addition");
// var num2 = +prompt("Enter your second number for addition")
// var snum1 = +prompt("Enter your first number for subtraction");
// var snum2 = +prompt("Enter your second number for subtraction")
// twoFunctions(num1,num2,snum1,snum2)
// Question no 4
// function displayAlert(){
//     var userName = prompt("Enter your name");
//     alert(userName)
// }
// displayAlert();
// Question no 5
// function concatFunc(A,B,C) {
//     var result = (A+" "+B+" "+C)
//     console.log(`The result of concatination will be = ${result}`)
// }
// var userVariable = prompt("Enter your input");
// concatFunc(userVariable,"the string",14)
// Question no 6
// function fullName(firstName,lastName) {
//     var result = firstName+" "+lastName
//     console.log(`Welcome ${result}`)
// }
// var firstName = prompt("Enter your first name ");
// var lastName = prompt("Enter your last name ");
// fullName(firstName,lastName);
// Question no 7
// function Multiply(num1,num2,num3) {
//     var result = num1*num2*num3;
//     alert(`The result of multiplication is ${result}`)
// };
// var num1 = +prompt("Enter your first number ");
// var num2 = +prompt("Enter your second number")
// var num3 = +prompt("Enter your third number ");
// Multiply(num1,num2,num3);
// Question no 8
// function calculateAverage(numbers) {
//     var sum = numbers.reduce(function (total, current) {
//       return total + current;
//     }, 0);
//     var average = sum / numbers.length;
//     return average;
//   }
//   var numbers = [2, 4, 6, 8, 10];
//   var avg = calculateAverage(numbers);
//   console.log("Average:", avg); 
//   Question no 9
// function sum(n1,n2) {
//     return n1 + n2
// }
// var n1 = +prompt("Enter you first number");
// var n2 = +prompt("Enter you second number");
// var addition = sum(n1,n2);
// console.log(`The result of addition is ${addition}`)
// Question no 10
// function calculateAverage(numbers) {
//         var sum = numbers.reduce(function (total, current) {
//           return total + current;
//         }, 0);
//         var average = sum / numbers.length;
//         return average;
//       }
//       var numbers = [2, 4, 6, 8, 10];
//       var avg = calculateAverage(numbers);
//       console.log("Average:", avg); 
    //   Question no 11
    // function capturedValue(userInput) {
    //     var result = `Welcome ${userInput} to our site !`;
    //     return result
    // };
    // var userInput = prompt("Enter your name ")
    // var returnValue = capturedValue(userInput);
    // console.log(returnValue);
    // Question no 12;
    // function countLetters(word) {
    //     var letterCounts = {};
    //     var cleanedWord = word.replace(/\s/g, '').toLowerCase();
    //     for (var i = 0; i < cleanedWord.length; i++) {
    //       var letter = cleanedWord[i];
    //       if (letterCounts[letter]) {
    //         letterCounts[letter]++;
    //       } else {
    //         letterCounts[letter] = 1;
    //       }
    //     }
    //     return letterCounts;
    //   }
    //   var word = "programming";
    //   var result = countLetters(word);
    //   console.log(result);      
    // Question no 13
    // function setYearInDate(dateObj, year) {
    //     dateObj.setFullYear(year);
    //     return dateObj;
    //   }
    //   var currentDate = new Date(); 
    //   var newYear = 2003;
    //   var updatedDate = setYearInDate(currentDate, newYear);
    //   console.log("Updated Date"  + updatedDate);
    //   Question no 14
    // function ageCalculator(birthYear) {
    //     var date = new Date();
    //     var currentYear = date.getFullYear();
    //     var cal = currentYear - birthYear;
    //     return cal
    // };
    // var birthYear = +prompt("Enter your birth year");
    // var exactAge = ageCalculator(birthYear);
    // console.log(`You are ${exactAge}year old`);
    // Qiestion no 15
    // function checkPresence(word ) {
    //     var namesArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
    //     return namesArray.includes(word);
    // }
    //   var searchWord = prompt("Enter your name");
    //   var isPresent = checkPresence(searchWord);
    //   console.log("Is '" + searchWord + "' present in the array? " + isPresent);
    // Question no 16
    // function repeatLetter(letter) {
    //     return letter.repeat(10);
    //   }
    //   var letter = 'a';
    //   var repeatedString = repeatLetter(letter);
    //   console.log("Repeated Letter:", repeatedString);
    //   Question no 17
    // function Reversion() {
    //     var arr  = ['a','b','c','d','e'];
    //     var reversion =  arr.reverse();
    //     console.log(reversion);
        

    // }
    // Reversion()
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // CHAPTER  38 (Local vs. Global  Variables) 
// Question no 1
// function demonstrateLocalVariable() {
//   var localVariable = "I'm a local variable";
//   console.log(localVariable); // Access the local variable
// }
// demonstrateLocalVariable();
// // console.log(localVariable);// This will result in an error because localVariable is not accessible outside the function
// // Question no 2
// function accessGlobal() {
//     var globalVariable = "global variable";
//     console.log(globalVariable) // Global variable accessablefor both inside and outside the function    
// }
// accessGlobal();
// console.log(globalVariable) // Global variable accessablefor both inside and outside the function
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER  39, 40 (Switch Statements)
// Question no 1
// var n1 = +prompt("Enter your first Number");
// var n2 = +prompt("Enter your second Number");
// var operator = prompt("Enter your operater");
// switch (operator) {
//     case "+":
//         console.log(n1+n2)
//         break;
//         case "-":
//             console.log(n1-n2)
//             break;
//             case "*":
//                 console.log(n1*n2)
//                 break;
//                 case "/":
//                     console.log(n1/n2)
//                     break;
//                     case "%":
//                         console.log(n1%n2)
//                         break;
//     default:
//         console.log("Invalid operator")
//         break;
// }
// Question no 2
// var city = "karachi";
// var userInput=prompt("Enter your city ");
// userInput = userInput.toLowerCase();
// switch (userInput) {
//     case "karachi":
//         console.log('Valid city')
//         break;

//     default:
//         console.log('Invalid city')
//         break;
// }
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 41 42 
// Question no 1
// var i = 0;
// var count = 0;

// while (count < 2) {
//   count++;
//   console.log(count)
// }
// // Using a do...while loop
// i = 0;
// count = 0;

// do {
//   count++;
//   console.log(count)
// } while (count < 2);
// Question no 2
// Sample array
// var animals = ["cat", "dog", "pig", "elephant", "horse"];
// var found = false;
// var i = 0;
// // Using a while loop
// while (i < animals.length) {
//   if (animals[i] === "pig") {
//     alert("Found it!");
//     found = true;
//     break; // Exit the loop when "pig" is found
//   }
//   i++;
// }
// found = false;
// i = 0;
// // Using a do...while loop
// do {
//   if (animals[i] === "pig") {
//     alert("Found it!");
//     found = true;
//     break; 
//   }
//   i++;
// } while (i < animals.length);
// if (!found) {
//   alert("Not found!");
// }

// Question no 03
// While loop
// var i =0 
// while (i<10) {
//    i++
//    console.log(i) 
// }
// // Do  While loop
// var j = 0
// do {
//     j++
//     console.log(i)
// } while (j<10);

// Question no 04
// var userInput = +prompt("Enter your number");
// var i =0 
// while (i<1) {
//    i++
//    console.log(userInput) 
// }


// Question no 5

// var i = 0;
// while (i<10) {
//     i++;
//     if (i%2===0) {
//         console.log(`Its even ${i}`)
//     }else
//     console.log(`odd number ${i}`)
// }

// Question no 6

// async function guessingGame() {
//     var randonNumber = Math.round(Math.random()*100);
//     console.log(randonNumber)
//     for(let attempts = 0; attempts <= 3 ; attempts++){
// var userInput = +prompt("Welcome to our guessing game \n enter your guessing number(1-100) \n You have only 3 attempts valid otherwise \n you have to start game again");
// if (userInput === randonNumber) {
//     console.log('congratulation you won the game');
//     break;
// }else if(attempts === 3){
//     console.log(`ops you lost the game  The correct number was ${randonNumber}`)
// }else{
//     console.log('incorrect anser try again')
// }
// }
// }

// guessingGame();


// Question no 7
// //  while loop
// var countdown = 10;

// while (countdown >= 0) {
//   console.log(countdown);
//   countdown--;
// }

// //do...while loop
// countdown = 10;

// do {
//   console.log(countdown);
//   countdown--;
// } while (countdown >= 0);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CHAPTER 46, 48 (Events)
//Question no 1
// function message() {
//     alert(`Welcome dear your to our site`);
   
// }
// Question no 2
// document.getElementById('triggerElement').addEventListener('click', function() {
//     var elementToHide = document.getElementById('elementToHide');
//     elementToHide.style.display = 'none'; 
//   });
//   Question no 3
// const item = document.getElementById('colorChangeLink')
// item.addEventListener('mouseover', function handleMouseOut() {
//     item.style.color = 'red';
//   });

// item.addEventListener('mouseout', function handleMouseOut() {
//     item.style.color = 'black';
//   });

// Question no 4
// document.getElementById('scrollToTopLink').addEventListener('click', function() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   });
// Question no 5
// html line (20)
// Question 6
// html 
// Question no 7
// html 
// Question no 8
// html
// Question no 9
// document.getElementById('playSoundButton').addEventListener('click', function() {
//     var audio = document.getElementById('myAudio');
//     audio.play();
//   });
  
// Question no 10
// html
// Question 11
// document.getElementById('elementToHide').addEventListener('mouseout', function() {
//     this.style.display = 'none'; 
//   });
//   Question 12
// html 
// Chapter 49, 50 (Reading and Setting field values)
// Question 1
// let userInput = prompt("Enter your input");
// console.log(userInput);
// Question 2
// function readCheckboxValue() {
//     const checkbox = document.getElementById('myCheckbox');
//     if (checkbox.checked) {
//       console.log('Checkbox value:', true);
//     } else {
//       console.log('Checkbox is not checked');
//     }
//   }
//   Question 3
// function readSelectValue() {
//     const select = document.getElementById('mySelect');
//     const selectedValue = select.value;
//     console.log('Selected value:', selectedValue);
//   }
//   Question 4
// function setTextInField() {
//     const textField = document.getElementById('myTextField');
//     textField.value = 'Hello, World!';
//   }
  

// Question 5
// let married = false; // Example marital status

// function setStatus() {
//   const statusField = document.getElementById('status');
//   married = confirm("Are you married? Click 'OK' for Yes, 'Cancel' for No.");
//   if (married) {
//     statusField.value = 'Married';
//   } else {
//     statusField.value = 'Available';
//   }
// }
// Question 6
// function fillInput() {
//     const inputField = document.getElementById('myInput');
//     const defaultValue = 'Hello Dear user';
//     if (inputField.value.trim() === '') {
//       inputField.value = defaultValue;
//     }
//   }
  
// Question 7
// function validateForm(event) {
//     event.preventDefault(); 
//     const firstName = document.getElementById('firstName').value;
//     const lastName = document.getElementById('lastName').value;
//     const email = document.getElementById('email').value;
//     if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') {
//       alert('Please fill in all fields.');
//     } else {
//       alert('Registration successful!');
     
//     }
//   }
// Chapter 51 (Reading and Setting paragraph text)
// Question 1
// function more() {
//     var moreContent = document.getElementById('textPara').innerHTML;
//      para = document.getElementById('para');
//     para.innerHTML = moreContent;
// }
// Question no 2
// function searchText() {
//     const paragraphText = document.getElementById('paragraph').textContent;
//     const searchInput = document.getElementById('searchInput').value;
//     const searchResult = document.getElementById('searchResult');
    
//     if (paragraphText.includes(searchInput)) {
//       searchResult.textContent = `Found: "${searchInput}" in the paragraph.`;
//     } else {
//       searchResult.textContent = `Not found: "${searchInput}" in the paragraph.`;
//     }
//   }
  
// Question no 3
// function findLongestWord() {
//     const paragraphText = document.getElementById('paragraph').textContent;
//     const words = paragraphText.split(/\s+/);
  
//     let longestWord = '';
//     for (const word of words) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
  
//     document.getElementById('longestWord').textContent = `Longest word: ${longestWord}`;
//   }
  
// QUESTION NO 4
// function setTextFromField() {
//     const textFieldValue = document.getElementById('textField').value;
//     const outputParagraph = document.getElementById('outputParagraph');
  
//     if (textFieldValue.trim() !== '') {
//       outputParagraph.textContent = textFieldValue;
//     }
//   }
//   Question 5
// function setTextFromField() {
//         const textFieldValue = document.getElementById('textField').value;
//         const outputParagraph = document.getElementById('outputParagraph');
      
//         if (textFieldValue === "Welcome"   ||textFieldValue=== "Hello World"  ) {
//           outputParagraph.textContent = textFieldValue;
//         }else{
//             outputParagraph.textContent = "Invalid Word or Phrase"
//         }
//       }
// Question 6
// function setTextFromField() {
//             const textFieldValue = document.getElementById('textField').value;
//             const outputParagraph = document.getElementById('outputParagraph');
          
//             if (textFieldValue.length <8 ) {
//               outputParagraph.textContent = textFieldValue;
//             }else{
//                 outputParagraph.textContent = "Invalid action"
//             }
//           }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Chapter 52 (Manipulating Images and Text)
// // Question 1
// const sentence = document.getElementById('boldSentence');

// sentence.addEventListener('click', function () {
//   sentence.style.fontWeight = 'bold';
// });
// Question 2
// const imageContainer = document.getElementById('imageContainer');
// const image = document.getElementById('image');
// const text = document.getElementById('text');

// imageContainer.addEventListener('mouseenter', () => {
//   image.style.display = 'none'; // Hide the image
//   text.classList.remove('hidden'); // Show the text
// });

// imageContainer.addEventListener('mouseleave', () => {
//   image.style.display = 'block'; // Show the image
//   text.classList.add('hidden'); // Hide the text
// });
//Question 3
// html

// Question 4
// const paragraph = document.getElementById('hoverParagraph');

// paragraph.addEventListener('mouseover', () => {
//   paragraph.style.textDecoration = 'underline';
// });

// paragraph.addEventListener('mouseout', () => {
//   paragraph.style.textDecoration = 'none';
// });
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Chapter 52 (Swapping Images)
// Question 1
// const swapButton = document.getElementById('swapButton');
// const image = document.getElementById('image');
// function changeImage(){
   
// image.src="img2.jpg"
// }


// xxxxxxxxxxxxxxxxxxxTHE END  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx