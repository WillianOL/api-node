import { createServer } from 'node:http';

// request - obter dados da requisição que o usuário está fazendo ao servidor http
// como nome, email, senha e etc.
// response - é o objeto que vai devolver a resposta pra quem está fazendo a requisição
const server = createServer((request, response) => {
  response.write('Hello world');

  return response.end();
});

server.listen(3333);
