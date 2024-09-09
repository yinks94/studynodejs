import _ from 'lodash'

console.log('Part4 Ch1 JS데이터')

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers.concat(fruits))
console.log(numbers)
console.log(fruits)

fruits.forEach( (item, i)=>{
    console.log(`${item} - ${i}`)
})

const b = fruits.map((item, i)=>({
    id: i,
    name: item
}))
console.log(b)

const aa = numbers.map( number => number < 3)
console.log(aa)

const bb = numbers.filter( number => number < 3 )
console.log(bb)

const cc = fruits.find(fruit => /^B/.test(fruit))
console.log(cc)

const dd = fruits.filter(fruit => /^[A,B]/.test(fruit))
console.log(dd)

const ee = fruits.findIndex(fruit => /^B/.test(fruit))
console.log(ee)

numbers.push(5)
console.log(numbers)
numbers.unshift(0)
console.log(numbers)

numbers.splice(2, 2)
console.log(numbers)

numbers.splice(2, 0, 999)
console.log(numbers)

const userAge = {
    name: '인경수',
    age: 85
}

const  userEmail = {
    name: 'Yin,KyoungSoo',
    email: 'yinks94@gmail.com'
}

const target = Object.assign({}, userAge, userEmail)
console.log(target)
console.log(target === userAge)

const keys = Object.keys(target)
console.log(keys)

console.log(target['name'])

const values = keys.map( key => target[key])
console.log(values)

// 구조분해 할당(Destructing assignment)
const user1 = {
    name: '인경수',
    age: 55,
    email: 'yinks94@gmail.com'
}

const {name: ink94, age, email, address='한국'} = user1
console.log(`사용자의 이름은 ${ink94}입니다`)
console.log(`${ink94}의 나이는 ${age}입니다`)
console.log(`${ink94}의 주소는 ${address}입니다`)

// 전개연산자(Spread)
fruits.push('Orange')
console.log(...fruits)

function toObjet(a, b, ...c){
    return {
        a: a,
        b: b,
        c: c
    }
}
const toObject2 = (a, b, ...c) => ({a, b, c})
console.log(toObjet(...fruits))
console.log(toObject2(...fruits))


const user2 = {
    name: 'Heropy',
    age: 85,
    emails: ['xxx@gmail.com']
}

const copyUser1 = Object.assign({}, user2)
const copyUser2 = {...user2}
const copyUser3 = _.cloneDeep(user2)

user2.age = 1000
user2.emails.push('aaa@namver.com')

console.log('user2 ', user2)
console.log(user2 === copyUser1)
console.log(copyUser1 === copyUser2)

console.log(user2.emails === copyUser1.emails)
console.log(user2.emails === copyUser3.emails)




//console.log(toObjet(fruits[0], fruits[1], fruits[2]))
/*
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
*/