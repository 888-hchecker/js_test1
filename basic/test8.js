const num=100
console.log(num)
const num1=new Number(100)
console.log(num1)
console.log(num1.toString().length)
console.log(num1.toFixed(2))
const num2=123.896
console.log(num2.toPrecision(4))
const num3=100000
console.log(num3.toLocaleString('en-IN'))
//Number.EPSILON
//Number.MAX_VALUE

//+++++math+++++
console.log(Math);
console.log(Math.abs(-4));//- sign to positive
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.3));
console.log(Math.random());//range between 0 to 1
console.log((Math.random()*10)+1)
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)