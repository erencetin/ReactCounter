// var names = ['Andrew','Julie','Jen'];
// names.forEach(function(name) {
//    console.log('foreach', name); 
// });

// names.forEach((name)=>{
//     console.log('arrowFunc',name);
// });

// names.forEach((name)=>console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('andrew'));
// var person = {
//     name : 'Andrew',
//     greet : function () {
//         names.forEach((name) => {
//             console.log(this.name + 'says to hi' + name);
//         }, this);
//     }
// }

// person.greet();

var addStatement = (a,b) => {
    return a+b;
}
var i = addStatement(2,4);
console.log(i);

//addexpression

var addExpression  = (a,b) => a+b;
console.log(addExpression(3,5));