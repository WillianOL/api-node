import { fastify } from 'fastify';
// criar o servidor com o fastify
const server = fastify();

// definir as rotas com o .get(caminho, callback com retorno)
server.get('/', () => {
  return 'Hello world';
});
// GRUD(Create, Read, Update, Delete)
// GET, POST, PUT, DELETE

server.post('/videos', () => {
  return 'post';
});

server.get('/videos', () => {
  return 'get';
});

// como o método é put, a rota recebe o :id para identificação do item
server.put('/videos/:id', () => {
  return 'put';
});
// mesma coisa para o delete
server.delete('/videos/:id', () => {
  return 'delete';
});

// retornar um objeto por exemplo
// server.get('/produtos', () => {
//   return {
//     celular: {
//       cor: "preto",
//       preco: "1400"
//     },
//     tablet: {
//       cor: "amarelo",
//       preco: "3400"
//     }
//   }
// })

// // definir a porta
// server.listen({
//   port: 3333,
// });
