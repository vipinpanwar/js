var person = new Object();
person["firstName"]='Vipin';
person.lastName='Nitin';

   // [] baracket is use tp find property of object by Dynamic String.

var firstNameProperty='firstName';
console.log(person);
console.log(person.firstName);
console.log(person['firstName']);

person.address=new Object();
person.address.street='101 mg road';
person.address.city='pune';
console.log(person['address'].street);//hardly used
console.log(person['address']['street'])

/***************************OBJECT LITERALS******************************** */
var  person1={
    "firstName":'Nitin',
    lastName:'panwar',
    address:{
        street:'101 delhi road',
        city:'Pune'

    }
};
console.log(person1.firstName);

function greet(person) {
    console.log('hi  '+person.firstName);

};
greet(person);
greet({firstName:'hello',lastName:'World'})
/**********************Creating Namespace or container************* */
//suppose we add two different library or js file one is english and other is spanish.

var english={greet:'Hello!'};
var spanish={greet:'Hola!'};
//Now we are using object as a contaienr which can contain property , object and fn;
console.log(english.greet);
console.log(spanish.greet);

/******************************JSON***************************************/

//JSON got motivation from js literals but they are different than js literals
//json is more strict than java literals like their key should be in doubnle quote where as in js key can be double quote or withour quote.

var objectLiteral={
    firstName:'hunny',
    'middleName':'singh',
    "lastName":'bisht'
}
console.log(objectLiteral);
console.log(JSON.stringify(objectLiteral));
var jsonValue=   '{ "firstName":"hunny" ,"middleName":"singh","lastName":"bisht"}';
//why giving an error when writing an object with new line.
console.log((jsonValue));



