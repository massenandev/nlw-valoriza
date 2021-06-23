import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors'

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

app.use((err: Error, request: Request, response: Response, next: NextFunction ) => {
  if(err instanceof Error){
    return response.status(400).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

app.listen(3000, () => {
  console.log('server is running')
})