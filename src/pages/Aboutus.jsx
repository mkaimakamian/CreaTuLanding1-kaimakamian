import { Alert } from "react-bootstrap";

export default function Aboutus() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="d-inline-block">
                <Alert variant="warning">
                    <Alert.Heading>Acerca de nosotros!</Alert.Heading>
                    <p>
                        Esta sección está destinada a la historia de los fundadores de Vending.
                        <p>En algunos cuantos meses más incluiremos las fantásticas
                            aventuras por las que han tenido que atravesar
                            <p>
                                los intrépidos socios hasta convertirse en lo que son hoy:
                                personas más avejentadas :')
                            </p>
                        </p>
                    </p>
                    <hr />
                    <p className="mb-0">
                        La única sección que vale la pena visitar es el catálogo.
                    </p>
                </Alert>
            </div>
        </div>
    )
}
