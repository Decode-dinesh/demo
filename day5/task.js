// 1) area of rectangle


class rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    getLength() {
        console.log(this.length);
    }
    getWidth() {
        console.log(this.width);
    }
    getArea() {
        console.log(this.length * this.width);
    }

}

var rec = new rectangle(20, 10);
rec.getLength();
rec.getWidth();
rec.getArea();


// 2) simple calculatou

class simpleCalculator {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }

}

class operation extends simpleCalculator {
    constructor(number1, number2) {
        super(number1, number2)
    }
    getAddition() {
        console.log(this.number1 + this.number2);
    }
    getSubraction() {
        console.log(this.number1 - this.number2);
    }
    getMultiplication() {
        console.log(this.number1 * this.number2);
    }
    getDivision() {
        console.log(this.number1 / this.number2);
    }
}
var calc = new operation(10, 20);

calc.getAddition();
calc.getSubraction();
calc.getMultiplication();
calc.getDivision();
