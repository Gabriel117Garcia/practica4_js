function sumaReciprocos(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += 1 / i;
    }
    return suma;
}
console.log(sumaReciprocos(5));