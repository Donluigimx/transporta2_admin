
export const handleSubmit = (response, defaultVal) => {
    if (response.status === 200 || response.status === 201) {
        return response.json();
    } else if (response.status === 201) {
        return response;
    } else if (response.status === 400 || response.status === 404) {
        return defaultVal;
    }
};