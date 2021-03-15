let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

nome.style.width = '100%';
email.style.width = '100%';
assunto.style.width = '100%';

function validaNome() {
    let txtNome = document.querySelector('#txtNome');
    if(nome.value.length < 3) {
       txtNome.innerHTML = "*Campo obrigatório!"
       txtNome.style.color = "red"
       txtNome.style.display = 'block'
    } else {
       txtNome.style.display = 'none'
       nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail');
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "*Campo obrigatório!"
        txtEmail.style.color = "red"
        txtEmail.style.display = 'block'
    } else {
        txtEmail.style.display = 'none'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto');
    if(assunto.value.length < 50 && assunto.value.length <= 1000) {
        txtAssunto.innerHTML = "Digite um texto com mín. de 50 e máx. de 1000 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true 
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulário enviado com sucesso!")
    } else {
        alert ("Preencha todos os campos!")

    }
}