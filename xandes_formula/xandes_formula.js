/* 

    sqrt(x - y) = z * sqrt(k);

*/

function errorMessage() {
    alert(
        "You have typed something wrong. Reload the page and try again."
    );
}

function getY(n, k) {
    
    let y = 0;
    
    for (let i = 0; i < n; i++) {
        y += k * 10 ** i;
    }

    return y;

}

function getX(n, k) {
    
    let x = 0;
    
    for (let i = 0; i < n; i++) {
        x += k * 10 ** i;
    }

    return x;

}

function getZ(n) {
    
    let z = 0;
    
    for (let i = 0; i < n; i++) {
        z += 3 * 10 ** i;
    }

    return z;

}

function showResult(x, y, z, k) {

    const firstResult = Math.sqrt(x - y);
    const secondResult = z * Math.sqrt(k);

    alert(
        `First operation: sqrt(${x} - ${y}) = ${firstResult}\n` +
        `Second operation: ${z} * sqrt(${k}) = ${secondResult}\n` +
        `Are they equals?: ${firstResult === secondResult}`
    );

}

function main() {
    alert(
            "This program proves the Xande's Formula:\n" +
            " sqrt(X - Y) = Z * sqrt(K)\n" +
            " You only need to provide a value between 1 and 4 to " +
            "represent the numerical digit of X and another value " +
            "to represent the quantity of numerical digits of Y."
    );

    const n = Math.floor(Math.abs(prompt(
        "Provide the quantity of numerical digits of Y:"
    )));

    const k = Math.floor(Math.abs(prompt(
        "Provide a integer between 1 and 4 to the numerical digit of X:"
    )));
    if (!(1 <= k && k <= 4)) errorMessage();
    
    const y = getY(n, 2*k);
    const x = getX(2*n, k);
    const z = getZ(n);
    
    showResult(x, y, z, k);
}

main();