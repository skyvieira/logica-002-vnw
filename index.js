
let age = 19

if (age >= 18) {
    console.log('Você é maior de idade.')
} else {
    console.log('Você é menor de idade.')
}


age = 20
const human = true

if (age >= 18 && human) {
    console.log('Você é humano e tem idade maior que 18.')
}


const birthday = 'Dezembro'

if (birthday === 'Janeiro'
    || birthday === 'Dezembro') {
    console.log(`Você faz aniversário em ${birthday}.`)
} else {
    console.log(`Você não faz aniversário em Janeiro nem Dezembro.`)
}


let name = 'Rafaela'

if (name.charAt(0) === 'R') {
    console.log(`O nome ${name} começa com a letra R.`)
} else {
    console.log(`O nome ${name} não começa com a letra R.`)
}


name = 'Ana'
const secondName = 'Vieira'

if (secondName.length === 6 
    || name.charAt(0) === 'E') {
    console.log('Acesso liberado.')
} else {
    console.log('Acesso negado.')
}