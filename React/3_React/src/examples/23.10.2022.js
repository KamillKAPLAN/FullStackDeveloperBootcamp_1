const root = document.getElementById("root");

/******************** CLASS ***********************/
//es5
var es5Person = function () {

}
// object create
const es5 = new es5Person();
console.log(es5);

//es6
class es6Person {
    constructor(name = "Misafir", year = new Date().getFullYear()) {
        this.name = name;
        this.year = year;
        console.log(this.name, this.year);
    }

    yasHesapla() {
        /*var hesap = new Date().getFullYear() - this.year;
        if(hesap == 0 || hesap < 0) {
            return `Yaşınız : ${hesap} dünyaya hoşgeldiniz`;
        } 
        return `Yaşınız : ${hesap}`;*/
        var hesap = new Date().getFullYear() - this.year;
        return hesap == 0 || hesap < 0 ? `Yaşınız : ${hesap} dünyaya hoşgeldiniz` : `Yaşınız : ${hesap}`;
    }

}

const es6p = new es6Person("Kamil", 1994);
// const es6p2 = new es6Person();
console.log(es6p, es6p.yasHesapla())
// console.log(es6p2, es6p2.yasHesapla())

/******************** CLASS KALITIM **********************/
class ES6Person {
    constructor(name = "Misafir", year = new Date().getFullYear()) {
        this.name = name;
        this.year = year;
        console.log(this.name, this.year);
    }

    yasHesapla() {
        var hesap = new Date().getFullYear() - this.year;
        return hesap == 0 || hesap < 0 ? `Yaşınız : ${hesap} dünyaya hoşgeldiniz` : `Yaşınız : ${hesap}`;
    }
}

class Teacher extends ES6Person {
    constructor(name, year, department) {
        super(name, year);
        this.department = department;
    }

    teach() {
        return "Öğretiyorum";
    }
}

class Student extends ES6Person {
    constructor(name, year, studentNumber) {
        super(name, year);
        this.studentNumber = studentNumber;
    }

    study() {
        return "Öğreniyorum";
    }

    greeting(text) {
        return `${text} Benim adım ${this.name}`
    }
}

class Employee extends Student {
    constructor(name, year, studentNumber, salary) {
        super(name, year, studentNumber);
        this.salary = salary;
    }

    metot() {
        return `${this.salary} maaşım.`
    }
}

const ES6Teacher = new Teacher("Kamil", 1994, "Yazılım");
console.log(ES6Teacher, ES6Teacher.yasHesapla(), ES6Teacher.teach());
const ES6Student = new Student("Melih", 1996, 14542025);
console.log(ES6Student, ES6Student.yasHesapla(), ES6Student.study(), ES6Student.greeting("Merhaba"));
const ES6Employee = new Employee("Mustafa", 1995, 14, 10000);
console.log(ES6Employee, ES6Employee.yasHesapla(), ES6Employee.metot())