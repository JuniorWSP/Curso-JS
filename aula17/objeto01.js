let amigo = {
    nome:'Ana', 
    sexo:'F', 
    peso:70.2,
    engordar(p = 0) {
        console.log('Engordou')
        this.peso += p //this é uma palavra de auto referencia ao
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)