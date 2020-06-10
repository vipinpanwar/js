
console.log('******************undefined js*********************')
/* Undefined is a special keyword which is set by javascript to a uninitialize variable  */

var c;
console.log(c);

if( c === undefined){
    console.log('c is undefined');
}
else {
    console.log('c is defined');
}
console.log(cool);/* Cool variable is not declare any where so brwser 
tell us that it is not in memory(Which is created during first phase of execution engine) so it is not defined*/