let num = [5,8,2,9,3]
num.sort()
num.push(1)
console.log(num)
console.log(`o vetor tem ${num.length} posições.`)
console.log(`o segundo valor do vetor é ${num[1]}`)
let pos = num.indexOf(4)
console.log(`O valor 4 esta na posição ${pos}`)

//atenção na posição da linha num.sort() e num.push() pois um vai interferir no resultado do outro