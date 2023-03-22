import axios from "axios"

export default function apiComments(method,endpoint){
    return axios({
        url: "https://dummyjson.com/" + endpoint,
        method
    }) 
    .then(response=>response.data.comments)
}