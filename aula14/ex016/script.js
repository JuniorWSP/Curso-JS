function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERRO, Faltam dados!!!')
        /* res.innerHTML = 'FALTA DADOS! Impossível contar.' posso colocar esse comando com essa frase no lugar do alert tambem. */
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO igual a 1')
            p = 1
        } /* esse comando servirá para caso for digitado passo 0 ele automaticamente assumirá o valor 1 */
        
        if (i < f) {
            //Contagem crescente
            for(let contador = i; contador <= f; contador = contador + p) { 
                /* O contador começa no inicio i; enquanto o contador for <= ao fim f; o contador recebe contador mais o passo p */
                res.innerHTML += ` ${contador} \u{1F449}` 
                /* O + nessa linha é de concatenação e não de soma pois com ele mostra todos os passos e sem ele vai mostrar apenas o ultimo valor, Para colocar o emoji procura no google um site sobre lista de emoji e vai aparecer varios emojis com os seus códigos na frente, por exemplo U+1F449 porem no JS usa-se `\u{1F603}` e so funciona entre crases. */ 
            }
        } else {
            //Contagem regressiva
            for (let contador = i; contador >= f; contador = contador - p) {
                res.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}