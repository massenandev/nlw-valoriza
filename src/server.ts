import 'reflect-metadata'
import express from 'express';

import { router } from './routes'

//nos leva diretamente pro index
import './database'

const app = express();

app.use(express.json())
/**
 * Tipos de parametros:
 * Routes Params => fazem parte da rota. tipo o id na url => "/test/{id}"
 * Query Params  => fazem parte de uma query. Geralmente pra filtrar => "/test?name=teclado&description=tecladobom" PARAMS NAO OBRIGATÓRIOS e não vem explícito na rota
 * Body Params   => utiliza pro metodo post, patch ou put. Vêm no corpo da requisição. ex: {
 * "nome": "teclado",
 * "description": "teclado bom"
 * }
 */

//inserir todas as rotas farão parte do projeto
app.use(router)

app.listen(3000, () => {
  console.log('server is running')
})