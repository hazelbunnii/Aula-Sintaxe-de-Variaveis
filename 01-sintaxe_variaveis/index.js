/**
 * ⊹₊˚‧‿︵‿︵‿︵‿₊Ი︵𐑼₊‿︵‿︵‿︵‿‧˚₊⊹
 * Aula 01: Sintaxe e variáveis
 * 09/02/2026
 * ⊹₊˚‧‿︵‿︵‿︵‿₊Ი︵𐑼₊‿︵‿︵‿︵‿‧˚₊⊹
 */
/*
﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌
Tipos primitivos em JS
﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌
O javascript possui tipagem fraca, ou seja
a própria linguagem irá decidir qual é o tipo
adequado.
 */
//exemplos:
var nome = "Aiko ⸜(｡˃ ᵕ ˂ )⸝♡" //string
var idade = 17 //int
var altura = 1.76 //float ou double
var online = false //bool

console.log("Bem vinda! "+nome)

//﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌
/*
var = escopo global, a variável fica
disponível em todo o código.

let = escopo local, a variável, fica
disponível apenas no bloco ou escopo que 
foi declarada.

const = funciona com a let porém ao adquirir
um valor atribuído, este valor é imutável
durante a execução do script.
*/
//﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌
if(true){
    var teste = "oi"
    //let teste = "oi"
}
console.log(teste)

//exemplo const
const teste2 = "Bom dia! "
//teste2 = "Bom dia! "
console.log(teste2)