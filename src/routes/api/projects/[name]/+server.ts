export async function GET(event) {
    const name = event.params.name
    const res = await event.fetch(`/api/projects`)
    const projects = await res.json()

    try {
        const project = projects.find((p: Project) => p.name === name)

        return new Response(JSON.stringify({ project }), {
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
        })
    } catch (error) {
        return new Response(JSON.stringify({ message: `Project ${name} not found` }), {
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
        })
    }
}