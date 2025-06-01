import axios from "axios";

export const GetItems = async () => {

    const data = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
    ).then(response => response.data);

    return data;
}

export const GetItem = async (id) => {

    const data = await axios.get(
        `https://fakestoreapi.com/products/${id}`
    ).then(response => response.data);

    return data;
}