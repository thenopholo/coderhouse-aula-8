export class Usuario {
    constructor(nome, sobrenome, email, telefone, senha) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.email = email
        this.telefone = telefone
        this.senha = senha
    }

    exibeDados() {
        alert(
            "Seus dados são:\n" +
            "Nome: " + this.nome + "\n" +
            "Sobrenome: " + this.sobrenome + "\n" +
            "Email: " + this.email + "\n" +
            "Telefone: " + this.telefone + "\n" +
            "Senha: " + this.senha
        );
    }

}