console.log('Part4 Ch3  정규표현식')

const str = `
010-1234-5677
thesecon@gmail.com
https://www.omdbapi.com/?apikey=9cd161fb&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

//const regexp = new RegExp('the', 'gi')
const regexp =/the/gi
console.log(str.match(regexp))

const regexp1 = /fox/gi
console.log(regexp1.test(str))
console.log(str.replace(regexp1, 'INK'))
console.log(str.match(/the/gi))
console.log(str.match(/\.$/gim))
console.log((/\.$/gim).test(str))
console.log( str.match(/^t/gim))
console.log( str.match(/d$/gm))

console.log( str.match(/./g))
console.log( str.match(/h..p/g))

console.log( str.match(/fox|dog/g))

console.log( str.match(/https?/g))

console.log( str.match(/d{2}/g))
console.log( str.match(/d{2,}/g))
console.log( str.match(/d{2,3}/g))
console.log( str.match(/\w{2,3}/g))
console.log( str.match(/\b\w{2,3}\b/g))

console.log( str.match(/[fox]/g))
console.log( str.match(/[0-9]{1,}/g))
console.log( str.match(/[가-힝]{1,}/g))

console.log( str.match(/\w/g))
console.log( str.match(/\w{1,}/g))

console.log( str.match(/\bf\w{1,}/g)) // 소문자 f로 시작되는 모든 단어
console.log( str.match(/\d{1,}/g))
console.log( str.match(/\s/g))

const h = `    the   hello   world    !`
console.log( h.replace(/\s/g, ''))
console.log( h.replace(/\s{1,}/g, ' '))

console.log( str.match(/.{1,}(?=@)/g))
console.log( str.match(/(?<=@).{1,}/g))