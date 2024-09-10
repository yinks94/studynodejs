import _ from 'lodash'
import axios from 'axios'
import checkType from './getType'
import {random, user as ink} from './getRandom'
import * as R from './getRandom'
import myData from './myData.json'


console.log('Part4 Ch2 JS데이터 실습')

console.log(_.camelCase('the hello world!'))
console.log(checkType([1, 2, 3]))
console.log(random(), random())
console.log(ink)
console.log(R.random())
console.log(R.user)


const usersA = [
    {userId: '1', name:'Ink94'},
    {userId: '2', name:'Neo'},
]
const usersB = [
    {userId: '1', name:'Ink9'},
    {userId: '3', name:'Amy'},
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)


//JSON Javascript Object Notation
const user = {
    name: 'Ink94',
    age: 85,
    emails: ['yinks94@gmail.com',
            'yinks94@dge.go.kr']
}
console.log(user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)


localStorage.setItem('user', JSON.stringify(user))
console.log(localStorage.getItem('user'))
console.log(JSON.parse(localStorage.getItem('user')))
localStorage.removeItem('user')

//lowdb 살펴보기

//OMDb API
//http://www.omdbapi.com/?i=tt3896198&apikey=9cd161fb
// axios


console.log(myData)

function fetchMovies(){
    axios
        .get('https://www.omdbapi.com/?apikey=9cd161fb&s=frozen')
        .then(res =>{

            const h2El = document.querySelector('h2')
            const imgEl = document.querySelector('img')
            h2El.textContent = res.data.Search[0].Title
            imgEl.src = res.data.Search[0].Poster

        })
}

fetchMovies()