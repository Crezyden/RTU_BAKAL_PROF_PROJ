import getBearer from "./bearer"
export default async function request(method: string, query: string, body?: any, withHeaders = true) {
    const bearer = getBearer()
    if (!withHeaders || bearer) {
        const res = await fetch(`${process.env.API_URL}/api/${query}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...(bearer && bearer)
            },
            ...(body && { body: JSON.stringify(body) }),
        }),
            data = await res.json()
        return data
    } else if (!bearer) {
        throw new Error('No accessToken')
    }

}