import type { Cookies } from "@sveltejs/kit"

export const setUserCookies = (cookies: Cookies, token: string, username: string, id: string) => {
    cookies.set("token", token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24,
        secure: false,
    })

    cookies.set("username", username, {
        httpOnly: false,
        path: "/",
        maxAge: 60 * 60 * 24,
        secure: false,
    })

    cookies.set("userId", id, {
        httpOnly: false,
        path: "/",
        maxAge: 60 * 60 * 24,
        secure: false,
    })
}

export const deleteUserCookies = (cookies: Cookies) => {
    cookies.delete("token")
    cookies.delete("username")
    cookies.delete("userId")
}

export const getUserCookies = (cookies: Cookies) => {
    return {
        token: cookies.get("token"),
        username: cookies.get("username"),
        userId: cookies.get("userId"),
    }
}

export const userCookiesExist = (cookies: Cookies) => {
    return cookies.get("token") && cookies.get("username") && cookies.get("userId")
}