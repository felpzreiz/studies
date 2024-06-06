const prompt = require('prompt-sync')({ sigint: true })

function splitNumberIntoDigits(number) {
    return number
        .toString()
        .split("")
        .map(Number);
}

function binarioParaOct(binario = String()){
    let octal = 0;
    let length = binario.length;

    for (let i = 0; i < length; i++) {
        let digito = parseInt(binario[i]);

        if (digito !== 0 && digito !== 1) {
            throw new Error("Entrada inválida: o número deve ser binário.");
        }

        let potencia = length - i - 1;

        octal += digito * Math.pow(2, potencia);
    }

    return octal;
}

do {
    console.clear();
    console.log(`>> Conversão de Binário para Octal - B2XB8 <<`);
    console.log(`*** Lembre-se que um número binário é composto apenas por (0 e 1).***`);
    console.log("--------------------------------------------------------------------------------");
    let nBin = Number(prompt("Digite um número para converter de Binário para Octal: "));
    var octNumArray = new Array

    const digits = splitNumberIntoDigits(nBin).reverse();

    var digLength = (digits.length % 3 > 0)
        ? (Math.floor(digits.length / 3) + 1)
        : (digits.length / 3)
    ;

    for (var contOct = 0; contOct < digLength; contOct++) {
        var trio = new Array
        var localI = contOct * 3

        trio[contOct] = [((digits[localI + 2] != undefined) ? digits[localI + 2] : ''), ((digits[localI + 1] != undefined) ? digits[localI + 1] : ''), (digits[localI])]

        //console.log(binarioParaOct(String(trio[contOct].join(''))))
        octNumArray[contOct] = binarioParaOct(String(trio[contOct].join('')))
    }

    var octal = Number(octNumArray.reverse().join(''))

    console.log(`A conversão do número binário: ${nBin}\nCorresponde ao número octal: ${octal}`);
    console.log("---------------------------------------");
    console.log("Deseja realizar outra conversão?");
    console.log();
    console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
    s_n = String(prompt(">>  "));
} while (s_n == "S" || s_n == "s");
console.clear();