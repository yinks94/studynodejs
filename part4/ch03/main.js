console.log('Part4 Ch3  정규표현식')

const str = `
010-1234-5677
thesecon@gmail.com
https://www.omdbapi.com/?apikey=9cd161fb&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

//const regexp = new RegExp('the', 'gi')
const regexp =/the/gi
console.log(str.match(regexp))