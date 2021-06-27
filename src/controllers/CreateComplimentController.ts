import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";


class CreateComplimentController {
  async handle(request: Request, response: Response){
    const { tag_id, user_receiver, message } = request.body
    const { user_id } = request

    const createComplimentService = new CreateComplimentService()

    const compliment = await createComplimentService.execute({
      tag_id, 
      //dessa forma, o user n pode manipular o asuario de envio. tem que ser autenticado pra poder fazer o envio
      user_sender: user_id, 
      user_receiver, 
      message
    })

    return response.json(compliment)
  }
}

export { CreateComplimentController }