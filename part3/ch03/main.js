console.log('chapter 03')

function sum(x, y){
    return x+y
}

const double = function (x){
    return x*2
}

const doubleArrow = x => x*2

const a = sum(1, 3)
const b = sum(4, 12)

console.log(a)
console.log(b)
console.log(sum(a, b))

console.log('double : ', double(7))
console.log('doubleArrow : ', doubleArrow(7));

(function (){
    console.log('IIFE1 :', a*2)
})();

(function (){
    console.log('IIFE2 :', a*2)
}());


// 호이스팅(Hoisting)
// 함수 선언부가 유호번위 최상단으로 끌어올려지는 현상
const aa = 7
double1(aa)

function double1(a){
    console.log('Hoisting : ', a*2);
}

// 타이머함수
// setTimeout(함수, 시간) : 일정시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeOut() : 설정된 Timeout 함수 종료
// clearInterval() : 설정된 Interval 함수 종료

// setTimeout( function (){
//     console.log('인경수')
// }, 3000)

const timer1 =  setTimeout( () => {
    console.log('인경수')
}, 3000)

const h1El = document.querySelector('h1')

const timer2 =  setInterval( () => {
    console.log('인경수 - Interval')
}, 3000)

//const h1El = document.querySelector('h1')

if( h1El != null ) {
    h1El.addEventListener('click', () => {
        console.log('h1 element is clicked and clearTimer, clearInterval')
        clearTimeout(timer1)
        clearInterval(timer2)
    })
}else{
    console.log('h1 element is null')
}


// 콜백(callback)
// 함수의 인수로 사용되는 함수

function timeout(callback){
    setTimeout( () => {
        console.log('Ink94 .... !')
        callback()
    }, 3000);
}

timeout(() => {
    console.log('Done!')
})
