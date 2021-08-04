function factorial(n){
    if (n == 0) {
        console.log(`Factorial of ${n} is 1.`);
    }

    else {
        let f = 1;
            for (i = 1; i <= n; i++) {
            f = f * i;
            }
    console.log(`Factorial of ${n} is ${f}.`);      
    }
}
factorial(10);