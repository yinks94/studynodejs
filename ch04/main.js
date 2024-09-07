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
