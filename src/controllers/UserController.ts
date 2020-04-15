import { Request, Response } from 'express'

interface User {
  name: string;
  email: string;
}

class UserController {
  public users: Array<User> = []

  public index = async (req: Request, res: Response): Promise <Response> => {
    return res.json(this.users)
  }

  public store = async (req: Request, res: Response): Promise <Response> => {
    const length = this.users.push(req.body)
    return res.json(length)
  }
}

export default new UserController()
