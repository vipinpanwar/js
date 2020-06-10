//js support both pass by value and pass by reference.
//pass by value is creating a different memory, it only for "Primitive type".
//pass by reference for everything except primitive type;
//mutate to change , immutate canot be change

//pass by value primitive type.
var first=1;
var second;
second=first;
second=3;
console.log(first);
console.log(second);
//pass by reference
// all objects are pass by reference, remember functions are also object.

var obj1={greeting:'Hello'}
var obj2;
obj2=obj1;
obj2.greeting='Hola!';
console.log(obj1);
console.log(obj2);

function changeGreeting(change){
    change.greeting='Howdy Modi'
}

changeGreeting(obj1);

console.log(obj1);
console.log(obj2);

obj1={'greeting':'new Memory space voila!'};//{}this point the objext to the new memory.

console.log(obj1);
console.log(obj2);
