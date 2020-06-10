/*******************Prototype Inheritence***************************
 * 1.it is flexible,easy to understand,extensible
 * 
 *All object which consist fn must have proto{} property .
 *First js engine looks at object scope than its proto{} scope ,
 * remember proto can also has proto{} object.
 * 
 */
var obj={firstname:'vipinPanwar'}; 
console.log('hellllo',obj)
var car={
    color:'blue',
    brand:'maruti'
}

var fn=function(){};
var arr=[]; 

//obj.__proto__=car;

for(var key in obj){
    if(obj.hasOwnProperty(key)){
    console.log(key,'  ',obj[key])
    }
}
_={};
var createAssigner = function(keysFunc, undefinedOnly) {
    console.log('keyfunc',' ',keysFunc);
    console.log('undefinedONly',' ',undefinedOnly);
    return function(obj) {
        console.log('obj  ',obj);
        console.log('arguments','  ',arguments);
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };
  _.allKeys = function(obj) {
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
   
    return keys;
  };

_.extend = createAssigner(_.allKeys);

  _.extend(obj,car);
  console.log(_.extend);
  (function(first){
    console.log('argumenrssss',arguments);
    console.log(first)

  }('hello','hello1','helllo2'))