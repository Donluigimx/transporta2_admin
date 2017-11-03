
export const handleSubmit = async (response, defaultVal) => {
    if (response.status === 200 || response.status === 201) {
        return await response.json();
    } else if (response.status === 400 || response.status === 404) {
        return defaultVal;
    }
};