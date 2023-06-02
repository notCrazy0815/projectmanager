export async function GET() {
    return new Response(JSON.stringify({ message: 'Hello from the API' }), {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
    })
}