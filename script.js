let student = prompt("Qual o nome do aluno?")
let n1 = prompt("Qual foi a primeira nota do aluno?")
let n2 = prompt("Qual foi a segunda nota do aluno?")
let n3 = prompt("Qual foi a terceira nota do aluno?")


let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if ( result  ) {
    alert("Parabens , "+ student +"! Sua media foi de: " + average)
}
else if(average < 3 ) {
    alert("Reprovado" )
}

else {
    alert("Estude para a sua prova de recuperação! Sua média foi de: " + average)
}