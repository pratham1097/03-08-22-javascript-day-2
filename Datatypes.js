// JSON = Javascript Object Notation


//Primitive Datatype
var Str="PRATHAM VARMA";
var Num=1097;
var BooleanVar=false;


document.write("<br/>",Num);
document.write("<br/>",Str);
document.write("<br/>",BooleanVar);

// TypeOf
document.write("<br/>",typeof(BooleanVar));


//Non-Primitive Datatype
// 1. Object: Object in Javascript is an entity having properties and methods. Everything is an object in javascript.

// Create an empty generic object
var obj = new Object();
document.write("<br/>"+typeof(obj));
document.write("<br/>"+obj.FirstName+" "+obj.LastName);


// Create a user defined object
var car = {
    modal: "mercedece e220d",
    color: "black",
    doors: 4
}
document.write("<br/>"+car.modal+" "+car.color+" "+car.doors);

// Array datatype
var cars = ["BMW", "Mercedes-Benz", "G wagon"];
document.write("<br/>"+cars[0]);
document.write("<br/>"+cars[1]);
document.write("<br/>"+cars[2]);


// Function datatype
var Demo = function(){ 
    return "Hello FRIENDS !"; 
}
document.write("<br/>"+typeof(Demo));
document.write("<br/>"+Demo());



