import axios from "axios";

export default function apiDetails(method,endpoint){
    return axios ({
        url : "https://dummyjson.com/products/" + endpoint,
        method
    })
    .then(response => response.data)
}