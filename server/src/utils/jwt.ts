import dotenv from 'dotenv'
import type { Request, Response, NextFunction } from 'express'
import jwt, { Secret, VerifyErrors } from 'jsonwebtoken'

dotenv.config()

if (!process.env.SECRET_ACCESS_KEY) {
  console.error('Error: Environment variable `SECRET_ACCESS_KEY` does not exist!')
  process.exit(1)
}

const secretKey: Secret = process.env.SECRET_ACCESS_KEY as string

export const authenticateToken = async (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).json({ message: 'No token provided' })
  }

  const [bearer, token] = authHeader.split(' ')

  if (bearer !== 'Bearer' || !token) {
    return response.status(401).json({ message: 'Invalid token format' })
  }

  jwt.verify(token, secretKey, (error: VerifyErrors | null, user: any) => {
    if (error) {
      return response.status(403).json({ message: 'Token is invalid or expired' })
    }

    request.user = user
    next()
  })
}
