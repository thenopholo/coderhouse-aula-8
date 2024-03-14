import { Usuario } from "./model/Usuario.js";


document.querySelector('.form').addEventListener('submit', function (event) {

    let nome = document.getElementById("nomeInput").value;
    let sobrenome = document.getElementById("sobrenomeInput").value;
    let email = document.getElementById("emailInput").value;
    let telefone = document.getElementById("telefoneInput").value;
    let senha = document.getElementById("senhaInput").value;

    let usuario = new Usuario(nome, sobrenome, email, telefone, senha);

    console.log(usuario); // Isso imprimirá o objeto usuário no console
    usuario.exibeDados(); // Isso imprimirá os dados do usuário em um alerta
});
