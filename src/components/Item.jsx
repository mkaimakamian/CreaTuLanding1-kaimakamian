import { Button, Card, CardFooter } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item({ title, price, image, rating: { rate }, id }) {
    return (
        <Card style={{ width: '18rem' }} className="text-center">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="pt-2">
                    Valoración : {rate} ⭐
                </Card.Text>

                <CardFooter className="m-2">
                    Precio: ${price}
                </CardFooter>

                <Link to={`/catalog/${id}`} >
                    <Button variant="success">Ver detalle</Button>
                </Link>
            </Card.Body>
        </Card >
    )
}
