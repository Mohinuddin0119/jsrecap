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
*/
// array methods
const products = [
    {name:'redmi',brand:'xiami',price:10000},
    {name:'samsung',brand:'samsung',price:20000},
    {name:'sam',brand:'sam',price:20000},
    {name:'Infinix',brand:'infinix',price:30000},
    {name:'Realme',brand:'Realme',price:40000},
    {name:'Iphone',brand:'Iphone',price:50000}
]

// map work just like filter and returns in array
const result = products.map(product => product.price)
console.log(result)
// forEach work just like and does not return in array
products.forEach(product => console.log(product.brand))
// filter work condition based and returns in array
const res = products.filter(pro => pro.price > 20000)
console.log(res)
// find work condition based but returns one elements
const res2 = products.find(product => product.brand === 'xiami')
console.log(res2)