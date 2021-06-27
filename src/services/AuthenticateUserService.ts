import { getCustomRepository } from 'typeorm'

import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { UsersRepositories } from '../repositories/UsersRepositories'

interface IAutenticateRequest {
  email: string
  password: string
}


class AuthenticateUserService {

  async execute({email, password}: IAutenticateRequest){
    const usersRepositories = getCustomRepository(UsersRepositories)
    
    //verificar se o email existe
    const user = await usersRepositories.findOne({
      email
    })

    //mensagem genérica por questões de segurança para maliciosos
    if(!user){
      throw new Error("Email/Password incorrect")
    }

    //verificar se a senha ta certa
    // compara a senha do user com a hasheada e ve se corresponde
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
      throw new Error("Email/Password incorrect")
    }
    //caso tudo certo
    //gerar o token
    const token = sign(
      {
      email: user.email,
      //md5 generator - insere um texto e ele gera um md5 hash
      //pode criar um nome na mão, mas fica mais seguro quando é gerado
      }, "4f93ac9d10cb751b8c9c646bc9dbccb9", { // -> seria interessante colocar numa var de ambiente)
        subject: user.id,
        expiresIn: "1d"
      }
    ) 
    
    return token
  }
}

export { AuthenticateUserService }