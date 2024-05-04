var i = 0
var j = 0
var c = 0
var num1 = []
var op = []
var conta

function valor(nomeId){
    var num = Number(document.getElementById(nomeId).value)
    i = i + 1

    num1[i] = num

	document.getElementById('display').value = num1.join('');
    
    return(Number(num1.join('')))
}

function operacao(nomeId){
    op[j] = Number(num1.join(''))
    resetar()

    j = j + 1
    
    if (c < 1){
        conta = Number(document.getElementById(nomeId).id)
        console.log(conta)
    }

    c = c + 1
}

function resetar(){
    num1 = []
}

function resultado(){
    operacao()

    switch (conta){
        case 101:
            document.getElementById('display').value = Number(op[j-2]) + Number(op[j-1]);
            break;

        case 102:
            document.getElementById('display').value = Number(op[j-2]) - Number(op[j-1]);
            break;

        case 103:
            document.getElementById('display').value = Number(op[j-2]) * Number(op[j-1]);
            break;

        case 104:
            document.getElementById('display').value = Number(op[j-2]) / Number(op[j-1]);
            break;   
    }

    c = 0
}

function secret(){
    var segredo = Number(document.getElementById('display').value)

    if(segredo == 20102004){
        window.location.href = "https://open.spotify.com/intl-pt/track/2TE9rkhJYDctxgzak0AnSb?si=5fa521c722c44fc6"
    }else{
        alert("Senha Incorreta")
        document.getElementById('display').value = '';
    }
}
