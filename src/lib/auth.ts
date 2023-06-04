import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import type { Cookies } from '@sveltejs/kit'
import { getUserCookies } from './cookies'

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

export const verifyToken = (token: string) => {
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET as string)
        return user
    } catch (e) {
        return false
    }
}

export const userAlreadyLoggedIn = async (cookies: Cookies) => {
    const { token } = getUserCookies(cookies)

    if (token) {
        if (verifyToken(token)) {
            return true
        }
    }

    return false
}