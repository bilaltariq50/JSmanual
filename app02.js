// var let and const ... dont use var since its confusing in scope
// we can create a variable wo any value and can initialize it later 
// var greetings;
// console.log(greetings); // will give undefine
// greeting = "hi";
//..................................................................
//variables can include numbers, alphabets _ and $ and can not statr with a number. use CamelCase (firstName) FirstName (its pascal case)
//.... use let isntead of var.
//const ..cant change it like a variable.also can not declare with out initializing.
//const while being used with arrays and objects just hold the pointer thus the object and the array can change but the const itsself can not be changed to hold another obj or an array
// const person = {
//     name : "Bil",
//     age : 44
// };
// person.name = "Jim";
// console.log(person); //this is ok
//...........................
//to add something at the end of an array use 
//array.push(lastitem);
// const myarray = [1,2,3,4,5];
// myarray.push(6); // this is ok
// console.log(myarray);
// myarray = [1,2,3,4,5,6]; // this is not ok
//???always use const for array and objects so that it can not be given some other value by msitake
//.....................................................
// there are two basic data time 1: primitive (1.string 2.number 3 boolean 4.null 5 undefinied 6 symbol (ES6) 
//2: reference (1.arrays 2.functions 3.object literals 4.dates 5.anything else)
//js is loosely typed language
//js is case sensitive ????
//.............................................
//we use typeof to find the type of a variable BUT what i dont understand is that to use it we type typeof and then a space and then the variable ...no brackets
// typeof mystring;
//let mystr = "abc";
//console.log(typeof mystr); //works
//......check this out
//const sym = symbol();
//const myarray = ["a","b","c"]; //you cant type [a,b,c] you have to use double quotes.
//console.log(typeof myarray); //an array is typeof OBJECT and so is object literal and DATE as well.
//..............variable conversion .............................
/*
mystr.length only works on strings
to convert number into string val = string(555+1); or string(44);
to convert boolean into string val = string(true); 
val  = string (new Date()); the new is keyword and Date() function return a date object
array to string val = string ([1,2,3,4]);
we also have val = (5).tostring(); function strange just 5 in bracket.
string to number we use val = Number("5"); 
val.toFixed(2) ????
val = Number("Hello"); //will give NAN ie Not a Number
val = parseInt("100"); will convert into integer not float
val.parseFloat(3); will convert into float to 3 decimal numbers

//...............Type conversion means when JS does conversion
let val1 = string("5");
let val2 = 6; // this 6 will also be treated as string here
console.log(val1 + val2);//will give 56 not 11;
//........................................................
Math.PI // math is an object 
Math.round(2.4);
Math.floor(2.8); // round down
Math.abc();
Math.min(2,44,6,1,-4);
Math.max(2,44,6,1,-4);
Math.random();
val = Math.floor(Math.random()*2); // since randow will give between 0 and 1 so to get number larger than 1 we have to multiply it also to make it round number we use math.floor
//...............strings..........................
we have str.concat(' ', lastname);// works as +
str.toUpper() // also str.toLower();
string is actually an array of strings so
let firstName = "Bill";// firtName[0] will give us "B"
str.indexOf();//gives the index of a alphabet 
str.lastIndexOf();//gives the last index of a alphabet 
str.charAt(2);//gives the char at that index
str.chatAt(str.length - 1); // will give the last chat of the variable
str.substring(0,4);
str.slice(0,4); also works as substring as strings but works with arrays. to get last numbers we give it -ve numbers.
str.split(","); // split based on a character
str.replace("brad","jack"); 
str.includes("brad"); // gives true or false.
//================ TEMPLATES strings==============================
to create html and strings etc we used to do as
let html = ""; html += "<ul><li>" + name + " " + ...etc etc
TO do the same with template strings we create variable with back ticks
let html = `
    <ul>
        <li>Name : ${name}</li>//we can jsut put variable in ${}
        <li>Age : ${age}</li>
        <li>job : ${job}</li>
        <li>Pay : ${getPay()}</li>//we can also put functions in it
    </ul>
    `; // there is a tick there
// do we need it in JSX????  

//====================== ARRAYS ============================
const numbers  = [1,2,3,4,5]; or const numbers = new array(1,2,3,);
const fruits = ["apple", 2,"banana", new Date(), {a:1,b:2}]; // so we can put any thing inside an araay even objects.
an OBJECT is just name value pair seperated by : enclose in {} and separated by commas (no comma in last)
to get the length of an array fruits.length; // no ()
there is a generic Array object which expose many functions 
val = Array.IsArray(fruits);
to get a single value from array val = fruits[2];
to assign variable at some index fruits[2] = "pineapple";
fruits.indexOf("apple"); // just like in string
//........Mutating array
fruits.push("abc"); // add to the end
fruits.unshift(120); to add to the front
fruits.pop(); to remove from the end
fruits.shift(); to remove from the front
fruits.solice(1,1); //we give the index of start and end to remove those items.
fruits.reverse(); to reverse
val  = numbers.concat(numbers2);
val = fruit.sort(); // alphabetic order .. dont work for numbers
fruits.find(myfunctionname); //we give the name of a function which is called.
*/
