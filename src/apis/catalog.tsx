import axios from "axios";


const GetItems = async () => {

    const data = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
    ).then(response => response.data);

    return data;
}

export default GetItems;