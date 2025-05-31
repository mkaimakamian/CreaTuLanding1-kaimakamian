import { useParams } from "react-router-dom"

export default function ItemDetail() {
    const { id } = useParams();

    // TODO - ir  abuscar el producto

    return (
        <div>
            <p>{id}</p>
        </div>
    )
}
