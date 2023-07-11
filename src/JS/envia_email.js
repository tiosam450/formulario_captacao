export default function enviaEmail() {
    const botao = document.querySelector('#btnEnviar')
    botao.addEventListener('click', function (e) {
        botao.setAttribute('value', 'Enviando')
    })
}