/*
Case Sensitive = reconhece letras maiusculas e minusculas

Posso acessar o DOM
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome') /*se por as # em document.getElementById não ira funcionar*/
let email = document.querySelector('#email')
let assunto = document.querySelector ('#assunto') /* se colocar a # em querySelector ira funcionar, sem a # não funciona*/
let nomeOk = false
let emailOk = false
let assuntoOk = false /*as variaveis globais tem que ser declaradas aqui em cima por boa pratica*/
let mapa = document.querySelector ('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3 ) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green' /*cor nas letras*/
        nomeOk = true

    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Emeil inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Emeil Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}    

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >=100) {
        txtAssunto.innerHTML = 'Máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true    
    }
}    

function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}