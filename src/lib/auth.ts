import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const comparePasswords = (password: string, hash: string) => {
    return bcrypt.compare(password, hash)
}

export const hashPassword = (password: string) => {
    return bcrypt.hash(password, 10)
}

export const createToken = (user: { id: string, name: string }) => {
    const token = jwt.sign({
        id: user.id,
        name: user.name,
    }, process.env.JWT_SECRET as string, {
        expiresIn: "24h"
    })

    return token
}