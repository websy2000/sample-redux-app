import axios from 'axios';

const baseUrl = "https://fakestoreapi.com/auth/login";
const userBaseUrl = "https://fakestoreapi.com/users";
const productUrl = "https://fakestoreapi.com/products";

export const getUserLogin = async (username, password) => {
    try {
        const response = await axios.post(`${baseUrl}`, {
            username,
            password
        })
        return response.data;

    } catch (err) {
        console.log(err);
    }
}

export const getSingleUSerById = async(id) => {
    try{
        const response = await axios.get(`${userBaseUrl}/${id}`);
        return response.data;
    } catch(err){
        console.log(err);
    }
}


export const getAllProducts = async() => {
    try{
        const response = await axios.get(productUrl);
        return response.data;
    } catch(err){
        console.log(err);
    }
}

export const getSingleProductById = async(id) => {
    try{
        const response = await axios.get(`${productUrl}/${id}`);
        return response.data;
    } catch(err){
        console.log(err);
    }
}