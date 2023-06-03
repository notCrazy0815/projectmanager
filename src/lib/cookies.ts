import type { Cookies } from "@sveltejs/kit";

export const setUserCookies = (cookies: Cookies, token: string, username: string, id: string) => {
    cookies.set("token", token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24,
    })

    cookies.set("username", username, {
        httpOnly: false,
        path: "/",
        maxAge: 60 * 60 * 24,
    })

    cookies.set("userId", id, {
        httpOnly: false,
        path: "/",
        maxAge: 60 * 60 * 24,
    })
}

export const userCookiesExist = (cookies: Cookies) => {
    return cookies.get("token") && cookies.get("username") && cookies.get("userId")
}