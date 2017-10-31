const url = 'http://transporta2.cf';

export async function auth(username, password) {
    const response = await fetch('http://transporta2.cf/api/Profiles/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username, password
        })
    });

    return response.json();
}

export async function unauth(token) {
    const response = await fetch(`${url}/api/Profiles/logout?access_token=${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response);
    return response;
}