const formulario = document.querySelector(".formulario-fale-conosco")

const mascara = document.querySelector(".mascara-formulario")

function mostrarFormulario() {
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderFormulario() {
    formulario.style.left = "-300px"
    formulario.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden" 
}

const mensagem = document.querySelector(".nosso-portifolio")

function mostrarMensagem() {
    mensagem.style.right = "50%"
    mensagem.style.transform = "translateX(50%)"
    mascara.style.visibility = "visible"
}

function esconderMensagem() {
    mensagem.style.right = "-390px"
    mensagem.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"      
}

function checkForm() {    
    let nome = document.getElementById('nome').value.trim();
    let telefone = document.getElementById('telefone').value.trim();
    
    // Verificar se ambos os campos estão preenchidos
    if (nome && telefone) {
        document.getElementById('botaoEnviar').disabled = false;
    } else {
        document.getElementById('botaoEnviar').disabled = true;
    }
}