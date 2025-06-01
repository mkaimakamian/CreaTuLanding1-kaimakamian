import { useParams } from "react-router-dom"
import { GetItem } from "../apis/catalog";
import { useEffect, useState } from "react";
import { Card, CardFooter } from "react-bootstrap";

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
        <div className="d-flex justify-content-center align-items-center min-vh-100">


            <Card style={{ width: '18rem' }} className="text-center">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.description}

                        {/* Por algún motivo, pese a que data.rating existe,
                     indica que es undefined cuando paso del catálogo a este detalle.
                     Sin embargo, si estando en el detalle decomento los votos y el rating,
                     fnciona :/
                     */}
                        {/* <p className="mt-3">
                        Votos: {item.rating.count}
                        <p>
                            Valoración : {item.rating.rate} ⭐
                        </p>
                    </p> */}

                    </Card.Text>
                    <CardFooter className="m-2">
                        Precio: ${item.price}
                    </CardFooter>
                </Card.Body>
            </Card >
        </div>
    )
}
