## 참고자료 git
```git
git init
//.gitignore 작성
git add .    
git commit -m
git status
//github repository 생성
git remote add origin <git url>
git push origin master
```

# 정규표현식(ReqExp)

정규식, Regular Expression

## 역할
- 문자 검색(Search)
- 문자 대체(Replace)
- 문자 추출(Extract)
## 테스트 사이트
https://regexr.com

## 참고사이트
http://heropy.blog/2018/10/28/regexp

## 정규식 생성
```js
// 생성자
new RegExp('표현', '옵션')
const regexp = new RegExp('[a-z]', 'gi')

// 리터럴
/표현/옵선
const regexp = /[a-z]/gi
```

```js
const str = `
010-1234-5677
thesecon@gmail.com
https://www.omdbapi.com/?apikey=9cd161fb&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부(Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array)
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체

## 플래그(옵션)

플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러 줄 일치(multi line)

## 패턴(표현)

패턴 | 설명
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | b가 없거나 b 와 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3애 이상 5개 이하(3~5개) 연속 일치
[abc] | a 또는 b 또는 c
[a-z] | a 부터 z 사이의 문자 구간에 일치(영어 소문자)
[A-Z] | A 부터 Z 사이의 문자 구간에 일치(영어 대문자)
[0-9] | 0 부터 9 사이의 문자 구간에 일치(숫자)
[가-힣] | 가 부터 힝 사이의 문자 구간에 일치(한글)
\w | 63개 문자(Word, 대소문자 52개 + 숫자 10개 + _ )에 일치
\b | 63개 문자에 일치하지 않는 문자 경계(Boundary)
\d | 숫자(Digit)에 일치
\s| 공백(Space, Tab 등)에 일치
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒤쪽 일치(Lookbehind)