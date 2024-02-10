document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('linkCriptografar').addEventListener('click', function (event) {
        event.preventDefault();
        capturarTexto();
    });

    document.getElementById('linkDescriptografar').addEventListener('click', function (event) {
        event.preventDefault();
        descriptografarTexto();
    });
});

function capturarTexto() {
    let textoDigitado = document.getElementById('meuCampoDeTexto').value;
    let textoCriptografado = encriptar(textoDigitado);
    alert("Texto criptografado: " + textoCriptografado);
}

function encriptar(texto) {
    let textoCriptografado = '';

    for (let i = 0; i < texto.length; i++) {
        let caractere = texto[i];

        switch (caractere) {
            case 'a':
                textoCriptografado += 'ai';
                break;
            case 'e':
                textoCriptografado += 'enter';
                break;
            case 'i':
                textoCriptografado += 'imes';
                break;
            default:
                textoCriptografado += caractere;
                break;
        }
    }

    return textoCriptografado;
}

function descriptografarTexto() {
    let textoDigitado = document.getElementById('meuCampoDeTexto').value;
    let textoDescriptografado = descriptar(textoDigitado);
    alert("Texto descriptografado: " + textoDescriptografado);
}

function descriptar(texto) {
    let textoDescriptografado = '';

    for (let i = 0; i < texto.length; i += 4) {
        let caractere = texto.substring(i, i + 4);

        switch (caractere) {
            case 'ai':
                textoDescriptografado += 'a';
                break;
            case 'ent':
                textoDescriptografado += 'e';
                break;
            case 'ime':
                textoDescriptografado += 'i';
                break;
            default:
                textoDescriptografado += caractere;
                break;
        }
    }

    return textoDescriptografado;
}
