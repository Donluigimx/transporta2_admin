import {handleSubmit} from 'api/utils';

const url = "http://api.mueve.me";

export async function fetchBusStops(token) {
    const response = await fetch(`${url}/api/BusStops/?access_token=${token}`);
    return await handleSubmit(response, []);
}