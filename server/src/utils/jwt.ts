import dotenv from 'dotenv'
import { Request, Response, NextFunction } from 'express'
import jwt, { VerifyErrors } from 'jsonwebtoken'

dotenv.config()

if (!process.env.SECRET_ACCESS_KEY) {
  console.error('Error: Environment variable `SECRET_ACCESS_KEY` does not exist!')
  process.exit(1)
}

const secretKey: string = process.env.SECRET_ACCESS_KEY as string

const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' })
  }

  const [bearer, token] = authHeader.split(' ')
  if (bearer !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Unauthorized - Invalid token format' })
  }

  jwt.verify(token, secretKey, (err: VerifyErrors | null, user: any) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden - Token is not valid' })
    }

    req.user = user
    next()
  })
}

export { authenticateToken }
