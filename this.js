/**************************Very Important***********************************/

console.log(this);
function f1(){
    console.log(this);
}
this.chapter='First';
function directlyAccess(){
    console.log(chapter);//we can access variable directly which is attached to the global variable this or window.
}

directlyAccess();

/***************Very Imp *****************************/
/*******************SELF*****************************/
var c={
    name:'inside the c object',
    log: function(){
        this.name='update the c object';
        this.lastname='add new property to the c object';//add the lastname to  the c object
        console.log(this);//When the method inside the object , it point to the object in which it is reside
        var childFunction=  function(newname){
            this.name=newname;//it works but with the window or this object.
        }
        childFunction('New name setting:)');
        console.log('updated one',this);
    
    }//this anonymous function is known as method.

    
};

c.log();

/*************To prevent the ambiguity of the above we use 'self'***********************/
var d={
    name:'inside the c object',
    log: function(){
        self=this;
        self.name='update the c object';
        self.lastname='add new property to the c object';//add the lastname to  the c object
        console.log(this);//When the method inside the object , it point to the object in which it is reside
        var childFunction=  function(newname){
            self.name=newname;//it works but with the window or this object.
        }
        childFunction('New name setting:)');
        console.log('updated one',this);
    
    }//this anonymous function is known as method.

    
};
d.log();
/***************************************************************************
                    Array
****************************************************************************/

var arr=[
    1,
    {name:'vipin',work:'nothing'},
    function(msg){
        console.log('method as expression inside the array  ',msg)
    },
    false,
    'Hello'

]

console.log(arr);
arr[2]('hello');
console.log(arr[2]('hello'));
console.log(arr[1].name);
