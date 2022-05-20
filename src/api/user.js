import { basePath, apiVersion } from "./config";

export function singUpApi(data) {
    const url = `${basePath}/${apiVersion}/signup`;
    /* http://localhost:3977/api/signup */
    console.log(url)
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };

    return fetch(url, params).then((response) => {
        return response.json();
    });
    
}