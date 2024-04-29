let i = 0;
let message = "oi, quer sair comigo? ";

typing();

function typing(){
  if (i < message.length){
    document.getElementById('text').innerHTML += message.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
