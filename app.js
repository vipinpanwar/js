/* As these codes are not inside any function so these are attached to global object*/


/*******************************Hoisting*************************************************
    Calling the funtion or variable before defining or decleration is called hoisting.
    JS execution engine has two phase 1. Creation 2.Executing
    1.Creation-During Creation , It assign memory to function with definition and also 
        assign memory to variable but it does not know final value of variable so it 
        assign it undefined.
    2.Executing: It execute code line by line . Beacuase of phase 1 variable and function 
                already in the memory, This is the reason we can call function before 
                    defining them and also log variable before declare or defining them.
*******************************************************************************************/
/*******************************Example of hoisting*****************************************/
console.log('******************app js*********************')
b();
console.log(a);

var a='hello world'
function b(){
    console.log("Hello World");
} 
