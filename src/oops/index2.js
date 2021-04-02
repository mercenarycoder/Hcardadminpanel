let x={value:10};
let y=x;

x.value=20;
// console.log(x.value,' ',y.value);
// this is a way to set propeties
x['krishna hare']='my external teacher and best friend';

let obj={value:10};

function increase(obj){
    obj.value++;
}
increase(obj);
// and this is a way to access properties with space and special characters in between them because otherwise you cannot access them
// console.log(x['krishna hare']);
let arr=[1,2,3,4,5,6];


console.log(x);
// 2 ways to delete a object
delete x.value;
delete x['krishna hare'];
console.log(x);
