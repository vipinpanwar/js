console.log('*******************Asynchronous************')
//Click evene get in to event queue and execute after execution engine finished everything.
function waitFor3Seconds(){
    var ms=3000+new Date().getTime();
    while(new Date().getTime()<ms){}
    console.log('Funtion execution finished');
}

function clickHandler(){
    console.log('Click Event happened');
}
//listen for click event
document.addEventListener('click',clickHandler);

waitFor3Seconds();
console.log('javascript execution finished');