 Lexican envoronment->Where something sits physically the code we write.
 Lexican->Having to do with wwords or grammar.
   It decide where our code (variable ,const , function ) sits in the memory of computer and how they reacts.

 Execution Context-> Wrapper to help manage the code that is running. There is lots of lexican environments. Which one is currenly running is managed via execution contexts. It can contain things beyond what you've written in your code.It parse , verify and execute the code.

  Whenever Execution context is created,there are few things created inside that 
  1.variable env 2.this 3.outer environment.

/*************************************************************
			OBJECTS
*************************************************************/
>An object is a collection of name value pairs.
      
   ex- address='main street';
>An object can consist three things
1.Primitive data type.
2.object
3.function.

>>An objject is siting somewhere in the memory with some address and cotains reference of (primitive data type or object or function).
>>can access its value either using bracket or dot operator. 	
*************OBJECT Literal*************************************
var person={}; when js engine find {} withour for or if condition it assume you are creating a new object.

*************Execution Context(Global)*********************
>The base execution context is our global execution context.
>It create following things
1. Global object('Window' object inside the browser)  2. 'this' variable.
3.OuterEnvironment
4.Your Code

At global level both are same this reference to window object.

************************************************************
                    function
***********************************************************
>> In js functon is known as first class functoin.
   which means every thing which we can do with other type we can perform that with function
example 1.assign 2.pass them as a parameter 3.crete them on fly like object{}.
>>fn are objects.
>>fn has five components
1.primitive
2.object
3.function
4.Name (optional can be anonymous)
5.Code (It is a special part because it can be invoke(), when it invoke new execution context is created)
>> when ever fn is executed it created a new execution context is created and engine created an 'argument' object also
with 'this', OuterEnvironment,variable space


*************************Global*******************************
Code or variable which is not inside the fn is global code.

****************************Javascript********************
>It is a single thread and synchronous languge, which means 
at a time single task and execute that line by line.
>For every function new execution context is created in stack.
>It is dynamic typing.

There is six primitive type in js-
1.undefined-(variable which is not set any value)
2.NULL-(lack of existence)
3.boolean  
4.number
5.string
6.symbol

>all operators are funtion ex= 3 + 4 (here + is a function )

*************************Asynchronous************************
Browser has following parts working for some parts-
1. Rendering engine
2. Javascript engine (Talk to Rendering and Event Queue)
3. Event Queue (Contains click(),httpRequest events)

While loading page first all Javascript code in execution engien is
finished then in continously check the event queue and if any event is 
found it creates the execution engine for that event.

************************Coerce**********************************
>meaning- persuade (an unwilling person) to do something by using force or threats.
when we write - var a= 1 + 'j';
js engine forcefully or Coerced convert 1 to string and concatenate them.

***********************Comparison************************************

>>if(3 == 3)    //true     equality
>>if('3' == 3)  //true     equality
>>if('3' === 3) //false    Strict equality does not do coerense.
>>if(3!='3')    //false    inequality
>>if(3!=='3')   //true     Strict inequality
>>Number(null) is 0;
>>if(null==0) false;
>>if(Number(null)==0) //true
>>Empty string in js is false or 0; ""==false and ""==0 is true but ""==false==0 is false because of coerce cannot be done on more than two operator.
For more Comparison : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

*****************************False in js****************************************
>>NULL
>>Empty string
>>undefined
>>0
a=0;
if(a||a===0){
  console.log('there is something');
}
//'===' is higher precendence than '||' so first a===0 is execute then a.

*********************************Special behaviour of ||*******************
//if coerce the value and return the value which first turn to true.
>>true||false //true
>>0||1        //1
>>undefined||'hello world' //hello world
>>default initializion can be done 
>>name=name||'Vipin Panwar'
