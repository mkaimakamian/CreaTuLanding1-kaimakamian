import { Link } from "react-router-dom";

export default function Item({ title, price, image, rating: { rate }, id }) {
    return (
        <div>
            <p>{title}</p>
            <p>{rate} ⭐</p>
            <p>${price}</p>
            <img src={image} width={64} alt={title} />
            <Link to={`/catalog/${id}`}>Ver detalle</Link>
        </div>
    )
}
