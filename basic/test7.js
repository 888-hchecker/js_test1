const name="hello"
const surename="world"
const yourname=(name+surename)
console.log(yourname)
//new style of defined string is
console.log(`myfirst name is ${name} andsecond name is ${surename}`);
//how to declare string 
const str_1=new String("abhilash")
console.log(str_1[0]);
console.log(str_1.__proto__);
console.log(str_1.length)
console.log(str_1.toUpperCase())
console.log(str_1.charAt('2'))
console.log(str_1.indexOf('h'))
const str_2=str_1.substring(0,4)
console.log(str_2)
const str_3=str_1.slice(-3,4)
console.log(str_3)
const str_4="    abhilash   "
console.log(str_4)
console.log(str_4.trim())
const str_5="https://abhi.com/open%20pages"
console.log(str_5.replace('%20','-'))
console.log(str_5.includes('abhi'))
const str_6="abh-lash-parida"
console.log(str_6.split("-"))
