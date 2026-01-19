/*
// Variable concept
const a = 10
// reasign does not work for const variable
// a = 102
console.log(a)

let b = 15;
// reasign work
b = 20;
console.log(b)
// var variable is global scope

// condition
const num = 10;
if(num >= 15){
    console.log('Yes')
}
else{
    console.log('No')
}

// Array
const friends = ['Mahi','Mohin','Sayel','Rafi']
// added last one element in array
friends.push('Onon')
// remove last one element in array
friends.pop()
// added first 
friends.unshift('hasan')
// remove first
friends.shift()
console.log(friends)
// provide some elements onto last index
// console.log(friends.slice(1,3))
// provide last index added
// console.log(friends.splice(1,3))

// object
const person = {
    name:'mohin',
    age:20,
    friends:friends
}
person.name = "Muhammad Mohin uddin"
console.log(person.name)
console.log(person.friends[0])

// template string
const fName = 'Muhammad'
const mName = 'Mohin'
const lName = 'Uddin'
console.log(`I am a ${fName} ${mName} ${lName}`)

// function
function sum(a,b){
    console.log(arguments)
}
sum()

// arrow function 
const add = (b,c) =>{
    console.log(arguments)
}

// spread operator
const numbers = [1,2,3,4,5]
// show just number or element
console.log(...numbers)
const newNum = [...numbers,10,100]
console.log(newNum)
console.log(...newNum)

// array methods
const products = [
    {name:'redmi',brand:'xiami',price:10000},
    {name:'samsung',brand:'samsung',price:20000},
    {name:'sam',brand:'sam',price:20000},
    {name:'Infinix',brand:'infinix',price:30000},
    {name:'Realme',brand:'Realme',price:40000},
    {name:'Iphone',brand:'Iphone',price:50000}
]

// map work and returns in array
const result = products.map(product => product.price)
console.log(result)
// forEach work  and does not return in array
products.forEach(product => console.log(product.brand))
// filter work condition based and returns in array
const res = products.filter(pro => pro.price > 20000)
console.log(res)
// find work condition based but returns one elements
const res2 = products.find(product => product.brand === 'xiami')
console.log(res2)

// Array destructuring
const classMates = ['Mahi','Mohin','Sayel','Hasan']
// index important
const [element4,element3,element2,element1] = classMates
console.log(element3,element4)

// object destructring
const student ={
    name:'mohin',
    age:21,
    country:'Bangladesh',
    friends:['mahi','salman','Rohan']
}

const {name,friends,age,country}= student
console.log(name)
console.log(friends)

// json
const person = {
    name:'Mohin',
    age:21,
    country:'Bangladesh',
    friend:{
        name:'solim',
        father:'korim'
    }
}
// convert string
const newStr = JSON.stringify(person)
console.log(newStr)
// convert main element
const planData = JSON.parse(newStr)
console.log(planData)

// fetch
// fetch('url');
// .then(res => res.JSON())
// .then(data => console.log(data))

// Keys
const student = {
    name:'Rohan',
    age:21,
    country:'Bangladesh',
    friends:['mahi','salman','sayel']
}
const justKeys = Object.keys(student)
console.log(justKeys)
// values
const justValues = Object.values(student)
console.log(justValues)
*/
const phones = [
    {name:'xiami',brand:'xiami',price:10000},
    {name:'apple',brand:'apple',price:100000},
    {name:'honor',brand:'honor',price:20000},
    {name:'samsung',brand:'samsung',price:30000}
]
// add elements 
const newPhone = {
    name:'Walton',
    brand:'walton',
    price:5000
}
const addedPhone = [...phones,newPhone]
console.log(addedPhone)

// remove elements using condition
const removePhone = phones.filter(phone => phone.brand !== 'apple')
console.log(removePhone)

const newPhones = [...removePhone,newPhone]
console.log(newPhones)