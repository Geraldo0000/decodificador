// ACIONADO PELO BOTÃO CRIPTOGRAFAR
function cripto() {
    const textarea = document.querySelector("#texto_entrada")
    const resultado = textarea.value.replace(/a/g, 'ai')
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

    //Chama função para exibir valor criptografado no retangulo2
    exibirResultado(resultado);
}

function descripto(){
    const textarea = document.querySelector("#texto_entrada")
    const resultado = textarea.value.replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    limparTexto();
    exibirResultado(resultado)
}

function limparTexto() {
    document.getElementById('texto_entrada').value = '';
}

//insere o texto fornecido pela função cripto no retangulo2
function exibirResultado(texto) {
    // selecionar retangulo 1
    const retangulo1 = document.querySelector(".retangulo")
    // selecionar retangulo 2
    const retangulo2 = document.querySelector(".retangulo2")

    //selecionar o elemento de p do retangulo2
    const textoCriptografado = document.querySelector(".texto-retangulo2")
    //inserir o texto dentro do retangulo2
    textoCriptografado.innerHTML = texto

    //remover a classe .removeRectangle do retangulo2
    retangulo2.classList.remove("removeRectangle");
    
    //adicionar a classe .removeRectangle do rentangulo1
    retangulo1.classList.add("removeRectangle");

}

function copiarTexto() {
    const textoCriptografado = document.querySelector(".texto-retangulo2").textContent;
    navigator.clipboard.writeText(textoCriptografado).then(() => {
        alert("Texto copiado com sucesso!");
    }).catch(err => {
        console.error("Erro ao copiar texto: ", err);
    });
}


