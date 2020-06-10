/* when  we create a new function it will also create a property 
* 'prototype'. 
***WHY we need prototype?
*
*/

function person(firstname,lastname){
    console.log('this inside ',this);
    this.firstname=firstname,
    this.lastname=lastname  
    
}

var john=new person('john','Doe');

console.log(john);
console.log(person.prototype);
console.log(person.__proto__); 

person.prototype.getfullname=function(){
    return this.firstname+'  '+this.lastname;
}
console.log(john.getfullname()); 
console.log(john.__proto__);

String.prototype.isLengthGreaterThan=function(limit){
    return this.length>limit;
}

console.log("JOHN".isLengthGreaterThan(3));
Number.prototype.isPositive=function(){
    return this>0;
}

// /3.isPositive();//give error bcz js doesnot convert 3 to object like string.
console.log(new Number(-3).isPositive());


//Array is an object in js which is name value pair, we should new use for in loop in array
//instead we should use simple for loop in array , bcz if we use 
//for in loop it , it also iterate prototype function which we add.

arr=['john','mira','holla'];
Array.prototype.customProperty='hello';
Array.prototype.isLengthGreaterThan=function(limit){

    return this.length>limit;
}
for(var name in arr){
    console.log(name,'  ',arr[name]);
}/*never use this, its output is
0    john
prototype.js:50 1    mira
prototype.js:50 2    holla
prototype.js:50 customProperty    hello
prototype.js:50 isLengthGreaterThan    ƒ (limit){

    return this.length>limit;
}
*/
//use this
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log(arr);

/***************************Pure Inhertence********************/

var car={
    brand:'maruti',
    name:'alto',
    greet:function(){
        return 'hi '+this.name;//if we forget to use this , it will look to global execution context bcz object does not have execution context.
    }

}

var redCar=Object.create(car);
console.log('redcar ',redCar);//create an empty object and it __proto__ property contains all attribute and value.
 
