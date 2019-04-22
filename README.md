# Blog App Client 

## Aplicação client-side do Blog App

Projeto frontend simples para demonstrar o funcionamento da aplicação.

### Pricipais componentes da aplicação

- Login: Autenticação do usuário por validação de seu token JWT
- Signup: Cadastro de usuário
- Post: Listagem dos posts cadastrados
- AddPost: Cadastro de posts
- Home: Área principal da aplicação

### Sobre o serviço de autenticação

O usuário é autorizado por meio do recebimento do token. 
Os dados do usuário são armazenados na Session Storage e utilizados para verificar se o usuário está logado. 
A Session Storage é limpada depois que o usuário realiza o logout.

## Passos para rodar esta aplicação

Será necessário ter o Node na máquina para rodar a aplicação. 
Você pode baixar o Node através do site oficial: https://nodejs.org/en/

1. Copie o seguinte trecho e cole no seu terminal: git clone https://github.com/danielmanfred/blog-app-client.git
2. Agora entre no diretório da aplicação: cd blog-app-client
3. Instale todas as dependências: npm install
4. Agora rode a aplicação: npm start
5. Se tudo ocorreu bem a aplicação irá abrir automaticamente no seu navegador

## Recursos utilizados no desenvolvimento deste projeto

- React
- React Router
- Axios