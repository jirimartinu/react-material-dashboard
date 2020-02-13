export const handleResponse = (response) => {
    return new Promise((resolve, reject) => {
        if (response.ok) {
            // return json if it was returned in the response
            const contentType = response.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
                response.json().then(json => resolve(json));
            } else {
                resolve();
            }
        } else {
            // return error message from response body
            response.text().then(text => reject(text));
        }
    });
}

export const handleError = (error) => {
    return Promise.reject(error && error.message);
}