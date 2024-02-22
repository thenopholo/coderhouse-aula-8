# Atividade Aula 8

Esta página foi criada para uma atividade do Curso de JavaScript da Coderhouse.

![Alt Text](/assets/tela_01.png)

## Objetivo do exercício

- Criar pelo menos um objeto para controlar o funcionamento de seu simulador.
- Incorporar suas propriedades e seu construtor.
- Invocar esse objeto em algum momento onde o usuário realize alguma ação.
- Utilizar seus métodos.

## Como eu realizei a tarefa

- Criei um formulário de cadastro de um novo usuário, onde é requerido que o usuário informe seu nome, sobrenome, email, telefone e senha.
- Com a estrutura HTML pronta eu fiz a estilização do form com CSS.
- E finalmente cheguei ao objetivo do exercício criando um objeto: `novoUsuario`, com um método personalizado `confrimaDados`:

![Alt Text](/assets/carbon%20(1).png)

Após isso, foi criado um evento de envio de formulário. O evento começa com a seleção de um elemento de formulário com o nome de classe `.form` usando o método `document.querySelector`. Em seguida, ele anexa um ouvinte de evento a este formulário que escuta o evento `'submit'`.

A seguir, a função recupera os valores inseridos nos campos do formulário. Ele faz isso selecionando cada elemento de entrada do formulário por seu ID usando `document.getElementById` e acessando sua propriedade `value`. Os IDs utilizados são `"nomeInput"`, `"sobrenomeInput"`, `"emailInput"`, `"telefoneInput"` e `"senhaInput"`.

Um novo objeto de usuário é então criado com os dados do formulário recuperados, com a variável `usuario`.

Por fim, a função registra o objeto de usuário recém-criado no console e chama um método confirmaDados no objeto de usuário.

![Alt Text](/assets/carbon%20(2).png)