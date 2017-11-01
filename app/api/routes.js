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

    return await response.json();
}

export async function getRoutes(token) {
    const response = await fetch(`${url}/api/Routes?access_token=${token}`);
    if (response.status === 200) {
        return await response.json();
    } else {
        return []
    }
}

export async function get_route(id, token) {
    const response = await fetch(`${url}/api/Routes/${id}?access_token=${token}`);
    return await response.json();
}

export async function getRouteBuses(id, token) {
    const response = await fetch(`${url}/api/Routes/${id}/buses?access_token=${token}`);
    return await response.json();
}

export async function getRouteBusStops(id, token) {
    const response = await fetch(`${url}/api/Routes/${id}/busStops?access_token=${token}`);
    return await response.json();
}

export async function createRouteBusStop(id, lat, lng, token) {
    const response = await fetch(`${url}/api/Routes/${id}/busStops?access_token=${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            point: {
                lat, lng,
            }
        })
    });
    return await response.json();
}