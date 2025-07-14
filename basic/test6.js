//two types of data type premmitive and non premmitive
//premitive:string,number,boolean,null,undefined,symbol,bigint
//reference or non premitive type:array,fuction,object
const scrore=100
const newscroe=10.3
const login= false
const outsidetemp= null
const id=Symbol('123')
const newid=Symbol('123')
console.log(id===newid)
//nonpremitive
const array_1=["hello","world"]
const object_1={
    name_1:"hello",
    surename_1:"world"

}
const function_1=function(){
    console.log("hello world")
}
console.log(typeof array_1)
console.log(typeof object_1)
console.log(typeof function_1)
console.log(typeof outsidetemp)