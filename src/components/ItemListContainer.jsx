import { useEffect, useState } from "react";
import GetItems from "../apis/catalog";
import { Link } from "react-router-dom";
import Item from "./Item";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await GetItems();
                setItems(data);
                console.log(data);
            } catch (error) {
                // TODO - mostrar alert
                console.error("Error al obtener los items", error);
            }
        }

        fetchItems();
    }, [])


    return (
        <div>
            {items.map(item => (
                <Item key={item.id} {...item} />
            ))}

        </div >
    )

}

export default ItemListContainer