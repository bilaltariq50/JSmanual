// As we know we can log objects into console so we can also login document object that will display the entire document object.
//console.log(document);

//.................................................................
//To slect an element we can use query selector (??new addition). the following line will make the h1 tag colored red. we can also type this line directly into console as well
//document.querySelector('h1').style.color = 'red'
//put a dot after document and see all the methods and prop that it exposes
//document.
//.................................................
//console.log("Hello");
//var name = "Bill";
//console.log("Hello Mr " + name);
//var myarray = [1,2,3,4,5];
//console.log(myarray);
/*
var myobj = {
    Name: "Bil",
    Age: 55,
    Post: "Admin"
};
console.log(myobj);
*/
//note that each object has its __proto__ which is its parent
//.............................
// we can also log object as table
/*
var myobj = {
    Name: "Bil",
    Age: 55,
    Post: "Admin"
};
console.table(myobj);
*/
//----------------------------------------------------
//to log error ..they will look red in console
//console.error("This is an error");
//.................................................
//to clear the console ALSO warnings
//console.clear();
//console.warn();
// we can mesaure the time spend in execution of some code by closing that code into console.time and console.timeEnd
//console.time("hi");
//.....code to run.... note the same "hi" in both.
//console.timeEnd("hi");