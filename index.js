function novoUsuario(nome, sobrenome, email, telefone, senha) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.telefone = telefone;
    this.senha = senha;

    this.confirmaDados = function(){
        alert(
        "Seus dados são:\n" +
        "Nome: " + this.nome + "\n" +
        "Sobrenome: " + this.sobrenome + "\n" +
        "Email: " + this.email + "\n" +
        "Telefone: " + this.telefone + "\n" +
        "Senha: " + this.senha
        );
    };
}

document.querySelector('.form').addEventListener('submit', function (event) {

    let nome = document.getElementById("nomeInput").value;
    let sobrenome = document.getElementById("sobrenomeInput").value;
    let email = document.getElementById("emailInput").value;
    let telefone = document.getElementById("telefoneInput").value; // Adicionado campo de telefone
    let senha = document.getElementById("senhaInput").value;

    let usuario = new novoUsuario(nome, sobrenome, email, telefone, senha);

    console.log(usuario); // Isso imprimirá o objeto usuário no console
    usuario.confirmaDados(); // Isso imprimirá os dados do usuário em um alerta
});
