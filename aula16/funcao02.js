function soma (n1 = 0 , n2 = 0) {
    return n1 + n2
}

console.log(soma(1, 8))

/* Posso colocar o parametro já pré definido igualando a 0, pois se por acaso eu mandar escrever apenas um valor como por exemplo o 8 ele vai somar 8 + 0 e dará uma resposta numérica, se caso eu nao igualar o parametro a 0 e mandar escrever apenas um valor, o JS irá somar nesse caso 8 com undefined e vai mandar escrever a resposta com NaN (Not a Number) */