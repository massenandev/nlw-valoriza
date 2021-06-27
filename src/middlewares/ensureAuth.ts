import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string
}

export function ensureAuth(
  request: Request,
  response: Response,
  next: NextFunction
){
  //receber o token
  const authToken = request.headers.authorization

  //validar se o token ta preenchido 
  if(!authToken){
    return response.status(401).end() // end pega a msg padrão do erro 401
  }
  // [, token] -> ignora o que vem na posição zero e traz somente o que tiver na posição [1]

  const [, token] = authToken.split(" ") //dividir a string em um array. posição 0 o bearer e a 1, o token
  //como o bearer não importa, o que queremos é o token. logo, a posição [1]
  
  //validar o token
  try {
    const { sub } = verify(token, "4f93ac9d10cb751b8c9c646bc9dbccb9") as IPayload //retorna as infos do user
    //recuperar infos do user
    request.user_id = sub

    return next()

  }catch(err) {
    return response.status(401).end() 
  }




}