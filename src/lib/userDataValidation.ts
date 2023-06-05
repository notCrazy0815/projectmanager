export const validate = (username: string, password: string) => {
    if (username.length < 3) return {
        success: false,
        error: true,
        message: "Username must be at least 3 characters long"
    }

    if (username.length > 20) return {
        success: false,
        error: true,
        message: "Username must be at most 20 characters long"
    }

    if (username.match(/\s/)) return {
        success: false,
        error: true,
        message: "Username must not contain white spaces"
    }

    if (!username.match(/^[a-zA-Z0-9]+$/)) return {
        success: false,
        error: true,
        message: "Username must not contain special characters"
    }

    if (password.length < 7) return {
        success: false,
        error: true,
        message: "Password must be at least 7 characters long"
    }

    if (password.length > 50) return {
        success: false,
        error: true,
        message: "Password must be at most 50 characters long"
    }

    if (password.match(/\s/)) return {
        success: false,
        error: true,
        message: "Password must not contain white spaces"
    }

    return {
        success: true,
        error: false,
        message: "Valid input",
    }
}