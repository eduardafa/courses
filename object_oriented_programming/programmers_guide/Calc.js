class Calculator {
    static Add(a, b) {
        console.log(a + b);
    }

    static Sub(a, b) {
        console.log(a - b);
    }
}

// // creating a new object is a way to access a class
// let calc = new Calculator();

// calc.Add(2, 2);
// calc.Sub(2, 2);

// avoiding the process quoted above (without creating a instance of the class), we can access a class through a static method
// before defining the method, it is necessary to apply the static method
// static Method(parameters){}
Calculator.Add(4, 5);
Calculator.Sub(9, 3);
