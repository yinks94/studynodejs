console.log('chapter 04')


const heropy ={
    firstName: 'Heropy',
    lastName: 'Park',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

const ink ={
    firstName: '경수',
    lastName: '인',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(heropy.getFullName(), ink.getFullName());

function User (first, last){
    this.firstName = first
    this.lastName = last
}
User.prototype.getFullName = function(){
    return `${this.lastName} ${this.firstName}`;
}

const yinks = new User('경수', '인')
const skkim = new User('선경', '김')

console.log(yinks.getFullName())
console.log(skkim.getFullName())


// this
// 일반 함수는 호출 위치에 따라 따라 this 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의

const heropy2 = {
    name: 'Heropy',
    normal : function(){
        console.log('normal .... : ', this.name)
    },
    arrow : () =>{
        console.log('arrow ..... :', this.name)
    }
}

heropy2.normal()
heropy2.arrow ()

const amy2 ={
    name: 'Amy',
    normal: heropy2.normal,
    arrow: heropy2.arrow
}

amy2.normal()
amy2.arrow()