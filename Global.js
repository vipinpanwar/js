//Here we have two cases.

//case 1 when  function b's execution context does not contain the variable it look for global one.
//In this case execution environment look for the outer environment in the below case outer environment for b is global env.
//lexically b() is not inside the any function so it is attached to global environment same for b() and myVar variable.
console.log('*********************************Global.js********************')
// function b(){
//     console.log(myVar);

// }

// function a(){
//     var myVar=20;
//     console.log('myVar');
//     b();
// }

// var myVar=10;
// a();
//case 2
function b(){
    console.log(myVar);//in this case variable is already in sapce of execution context so it will be undefined.
    var myVar=0;
}

function a(){
    var myVar=20;
    console.log(myVar);
    b();
}

var myVar=10;
a();
/*************************SCOPE CHAIN*****************************8 */
//case 3
function b(){
    console.log(myVar);//in this case variable is already in sapce of execution context so it will be undefined.
    var myVar=0;
}

function a(){

    function b(){
        console.log(myVar);//fierst b check in scope of a then global space.
        var myVar=0;
    }
    
    var myVar=20;
    console.log(myVar);
    b();
}

var myVar=10;
a();