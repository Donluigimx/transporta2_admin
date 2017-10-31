const url = 'http://transporta2.cf';

export async function createRoute(number, origin, destination, token) {
    const response = await fetch(`${url}/api/Routes?access_token=${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            number, origin, destination
        })
    });

    return response.json();
}