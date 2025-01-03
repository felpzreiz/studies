const dataInicial = new Date('October 6, 2024 00:00:00').getTime();

// Função para atualizar a contagem regressiva
function atualizarContagemRegressiva() {
  // Calcula o tempo restante até a data final 
  const agora = new Date().getTime();
  const diferenca = (dataInicial - agora) * (-1);

  // Calcula dias, horas, minutos e segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
  const milissegundos = diferenca % 1000;
  console.log(milissegundos)

  // Atualiza os elementos HTML com os novos valores
  document.getElementById('dias').innerText = dias;
  document.getElementById('horas').innerText = horas;
  document.getElementById('minutos').innerText = minutos;
  document.getElementById('segundos').innerText = segundos;

  if (segundos%6 == 0 && milissegundos%200 == 0){
    mudarImagem();
  }
}

function mudarImagem() {
  const magicNumber = Math.floor(Math.random() * 5);
  const img = document.getElementById("minhaImagem");
  
  img.src = "images/image"+magicNumber+".png";
}

// Atualiza a contagem regressiva a cada segundo
const intervalo = setInterval(atualizarContagemRegressiva, 0);
