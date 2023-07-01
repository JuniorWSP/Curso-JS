function fatorial(n) {
    let fat = 1
    for (let conta = n; conta > 1; conta = conta -1) {
        fat = fat * conta
    }
    return fat
}
console.log(fatorial(3))

//O fatorial de 5! = 5 x 4 x 3 x 2 x 1 = 120