const url = 'http://transporta2.cf';

export async function authUser(username, password) {
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