import { getCustomRepository } from 'typeorm';
import { NextFunction, Request, Response } from "express";
import { UsersRepositories } from '../repositories/UsersRepositories';

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
  //manipulação da request
  const { user_id } = request

  const usersRepositories = getCustomRepository(UsersRepositories)

  //verifica se o user é admnin
  const { admin } = await usersRepositories.findOne(user_id)

  if(admin){
    return next()
  }

  return response.status(401).json({
    error: "Permission denied"
  })
}