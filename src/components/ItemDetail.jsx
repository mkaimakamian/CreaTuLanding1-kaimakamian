import { useParams } from "react-router-dom"
import { GetItem } from "../apis/catalog";
import { useEffect, useState } from "react";

export default function ItemDetail() {
    const { id } = useParams();

    const [item, setItem] = useState([]);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await GetItem(id);
                setItem(data);
                console.log(data);
            } catch (error) {
                // TODO - mostrar alert
                console.error("Error al obtener los items", error);
            }
        }

        fetchItem();
    }, [])
    return (
        <div>
            <p>{item.title}</p>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <p>{item.rating.rate} ⭐</p>
            <p>{item.rating.count} ⭐</p>
            <p>${item.price}</p>
            <img src={item.image} width={64} alt={item.title} />
        </div>
    )
}
