export function load({ params } : { params: { name: string } }) {
    return {
        name: params.name,
    }
}