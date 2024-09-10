# 정규표현식(ReqExp)

정규식, Regular Expression

## 역할
- 문자 검색(Search)
- 문자 대체(Replace)
- 문자 추출(Extract)
## 테스트 사이트
https://regexr.com

## 정규식 생성
```js
// 생성자
new RegExp('표현', '옵션')
const regexp = new RegExp('[a-z]', 'gi')

// 리터럴
/표현/옵선
const regexp = /[a-z]/gi
```