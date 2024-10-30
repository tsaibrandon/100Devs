function pow(x, n) {
    return Math.pow(x, n)
}

function otherPow(x, n) {
    let product = 1

    for (let i = 0; i < n; i++) {
        product *= x
    }

    return product
}

console.log(pow(2, 4))
console.log(otherPow(2, 4))

// other stuff
let x = prompt("x?", "")
let n = prompt("n?", "")

if (n < 1) {
    alert("Power ${n} is not supported, use a positive integer")
} else {
    alert(pow(x, n))
}