import somar from "./soma.js"

var num1 = Number(document.getElementById("num1").value)
var num2 = Number(document.getElementById("num2").value)
var botao = document.querySelector("button")
var resultado = document.getElementById("result")

botao.onclick = () => {
    resultado.innerText = ("Oii")
}