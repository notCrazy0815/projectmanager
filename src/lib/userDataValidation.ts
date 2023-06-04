export const validate = (username: string, password: string) => {
    if (username.length > 3 && password.length > 6) return {
        success: true,
        error: false,
        message: "Valid input"
    }

    if (username.length < 4) return {
        success: false,
        error: true,
        message: "Username must be at least 4 characters"
    }

    if (password.length < 7) return {
        success: false,
        error: true,
        message: "Password must be at least 7 characters"
    }

    return {
        success: false,
        error: true,
        message: "Invalid input"
    }
}