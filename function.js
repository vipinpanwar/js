function greet() {
    console.log('Hi this is a code component one of the five part');//code part

}//name =greet,
greet.language = 'English';
console.log(greet());//invoke called the code part only. This fn return undefined.
console.log(greet);
console.log(greet.language)

//Statement is something which cannot be evalaute and give value. Ex if statement , whileloop etc;
//expression is something whic evalaute as value like 2+3

function greet1() {
    console.log('hi greet 1');//this is just a statement it get memory during excution memory allocation phase.
}
var anonymousGreet = function () {
    console.log('Anonymous greet');
}//anonymous fn is a expression, it does not get memory during memory allocation phase
//anonymousGreet carry the address of anonymous fn .
//this expression return the object
anonymousGreet();

function log(a) {
    console.log(a);
}
log(function () { console.log('Functoin on the fly') });//creating function on the fly,

/*************************Arguments ***********************************************/

function argumentsfn(firstname, lastname, language) {
    language = language || 'en';
    console.log(arguments)
    if (arguments.length == 0) {
        console.log('empty prameters');
        console.log('----------------------')
        return
    }
    console.log(firstname)
    console.log(lastname)
    console.log(language)
    console.log('------------------')

}

argumentsfn();
argumentsfn('john');
argumentsfn('john', 'doe', 'anthony');

/************************Spread**********************************/
function spreadfn(firstname, lastname, language, ...others) {
    console.log('others', others);//we can get as many parameter in others object, which is an array , not a js arary why?
    if (arguments.length == 0) {
        console.log('empty prameters');
        console.log('----------------------')
        return
    }

    console.log('------------------')
}

spreadfn();
spreadfn('john');
spreadfn('john', 'doe', 'anthony', 'extra1', 'extra2');


/***************************Dangerous ALert***************************/
//js engine automatically put ; so we have to always put ; and avoid Danger situation.
function Danger() {

    return
    {
        name: 'Danger';
    }

}


function DangerLess() {

    return {
        name: 'Danger'
    }

}
console.log(Danger());
console.log(DangerLess());


/***********************Immediately Invoked Function******************************/

var greetSelfInvoked = function (name) {//case 1
    console.log('Hello Self Invoked', name);
}('hello');

function hello(name) {
    console.log('Hello Self Invoked2', name);
} ('hello');//This does not work because this is a statement and above one is expression.



/*
function(){
...
};//this will result in error because syntax parser search for name after fn .

(function(){
...
};)//Does not give an error.

*/

/**************IMP************************************
 *if a fn expression is wrap inside the () js consider is as
 * a anonymous fn and we can use that fn and execute it
 * 
 * **fn exression is also known as dirst class fn.
 */
var hobby = 'Cricket';//semicolon is imp here otherwise an error.
(function (hobby) {
    console.log('using the fn expression', hobby, this.hobby);
}(hobby));//() these parenthesis create a new execution context and all the properties inside this execution
//context is different that global execution context , so no code collide.


/************************Closure************************************
 * The concept is js engien create closure for us.
 * When execution context of outer environment is over , in this case foo
 * and we return a fn expression, which will print country parameter, country is 
 * a property for foo and now foo's execution context is over, but then also
 * js engine will store the country variable in the memory so that fn expression
 * inside it can use country variable whenever it want.
 * 
 * 
 * so execution context of fn expression still has a reference to country variable which
 * is not in the scope, so this reference of execution context to outer variabnle is known 
 * as closure.
*/

function foo(country) {

    return function (state) {
        console.log(country, state);
    }
}

foo('INDIA')('GOA');
var statename = foo('INDIA');
statename('Kerala');

function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(
            function () {
                console.log(i);
            }
        )

    }

    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

function buildFunctions2() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function (j) {
                return function () {
                    console.log(j);
                }
            }(i))// for new js version we can use let j=i, S
        )

    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

/****************************IMPORTANT***********************
 *  CALLBACK function.
 * 
 * IN this we call a function and give a fn expression as a parameter or pass a fn object
 * and the calling fn calls the parameter fn for us is known as callback fn.
 * 
 */

function sayHiLater() {

    var greeting = 'Hi!';

    setTimeout(function () {
        console.log(greeting);

    }, 3000);

}

sayHiLater();

// jQuery uses function expressions and first-class functions!
//$("button").click(function() {
//    
//});

function tellMeWhenDone(callback) {

    var a = 1000; // some work
    var b = 2000; // some work

    callback(); // the 'callback', it runs the function I give it!

}

tellMeWhenDone(function () {

    console.log('I am done!');

});

tellMeWhenDone(function () {

    console.log('All done...');

});
/**************************Call,bind and apply********************************
 * All fn is js has access to three fn (call,bind,apply)
 * bind()->when we call bind for any fn bind creates the copy of the caller function 
 *   what it does is bind the this(object) 
 * to the parameter which we pass , so with the help of this object
 * we can access the parameter object's properties and methods.
 * ** bind creates the copy of the function 
 * 
 * call()->it does not create the copy of the fn instead it execute the fn.
 * call and aplly is sane only thing is in apply we send the parameters in an array.
 * 
 */
var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
        
    }
}

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}
var logName2 = (function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}).bind(person,'hindi','maths'); // does not work bcz it creates the copy of the fn.

var logName2 = (function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}).call(person,'hindi','maths'); // it does work bcz it execute the fn.



var logPersonName = logName.bind(person);
//console.log(logPersonName);
logPersonName('en');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}).apply(person, ['es', 'en']);

// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));//person2 borrow the fn from person 1.

// function currying, it is setting the fn parameter permanent.

function multiply(a, b) {
    return a*b;   
}

var multipleByTwo = multiply.bind(this, 2);
/* var multipleByTwo = multiply.bind(this, 2); this can be interpret as
function multiply( b) {
    a=2;
    return a*b;   
}
*/

console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));