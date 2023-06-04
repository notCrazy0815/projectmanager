import { userAlreadyLoggedIn } from '$lib/auth.js'
import { redirect } from '@sveltejs/kit'

export const load = async ({ cookies}) => {
    if (!await userAlreadyLoggedIn(cookies)) {
        throw redirect(303, "/")
    }
}