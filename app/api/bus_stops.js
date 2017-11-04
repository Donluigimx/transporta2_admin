import {handleSubmit} from 'api/utils';

const url = "http://api.mueve.me";

export async function fetchBusStops(token) {
    const response = await fetch(`${url}/api/BusStops/?access_token=${token}`);
    return await handleSubmit(response, []);
}

export async function createBusStop(lat, lng, token) {
    const response = await fetch(`${url}/api/BusStops/?access_token=${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            point: {
                lat, lng
            }
        })
    });

    return await handleSubmit(response, null);
}