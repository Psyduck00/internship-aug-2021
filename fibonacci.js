function fibonacci(n){
    let x = 0, y = 1, z;

        for (let i = 1; i <= n; i++) {
            console.log(x);
            z = x + y;
            x = y;
            y = z;
        }
}
fibonacci(10);
