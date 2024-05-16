import somar from "./soma.js"

var num1 = Number(prompt("Insira o primeiro número: "))
var num2 = Number(prompt("Insira o segundo número: "))
var botao = document.querySelector("button")
var resultado = document.getElementById("result")

botao.onclick = () => {
    resultado.innerText = somar(num1, num2)
}
