import 'reflect-metadata'
import express from 'express';

//nos leva diretamente pro index
import './database'

const app = express();
/**
 * Tipos de parametros:
 * Routes Params => fazem parte da rota. tipo o id na url => "/test/{id}"
 * Query Params  => fazem parte de uma query. Geralmente pra filtrar => "/test?name=teclado&description=tecladobom" PARAMS NAO OBRIGATÓRIOS e não vem explícito na rota
 * Body Params   => utiliza pro metodo post, patch ou put. Vêm no corpo da requisição. ex: {
 * "nome": "teclado",
 * "description": "teclado bom"
 * }
 */


app.listen(3000, () => {
  console.log('server is running')
})