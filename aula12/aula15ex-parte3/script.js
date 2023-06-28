function testar() {
    let data = new Date()
    let ano = data.getFullYear() /* coloca o ano completo com 4 digitos */
    let fano = document.getElementById('txtano')
    let res = document.querySelector('#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('ERRO, Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img') /* essa linha como a de baixo, irá carregar a imagem diretamente pelo JS, mas poderia ser tambem pelo html */
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background = '#121f97'
            let element = document.getElementById('sec')
            element.style.background = '#4cbdf1'

            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'criança-m.webp')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'kiko.webp')
            } else if (idade < 60){
                //Adulto
                img.setAttribute('src', 'madruga.webp')
            } else {
                //Idoso
                img.setAttribute('src', 'jaiminho.webp')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            document.body.style.background = '#aa2844'
            let element = document.getElementById('sec')
            element.style.background = '#eea1d4'

            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'criança-f.webp')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'chiquinha.webp')
            } else if (idade < 60){
                //Adulta
                img.setAttribute('src', 'florinda.webp')
            } else {
                //Idosa
                img.setAttribute('src', 'clotilde.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) /* Adiciona um elemento, nesse caso o elemento img entre parenteses */
    }
}