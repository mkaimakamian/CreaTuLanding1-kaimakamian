import { Alert } from "react-bootstrap";

export default function Contactus() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="d-inline-block">
                <Alert variant="secondary">
                    <Alert.Heading>Contactate</Alert.Heading>
                    <p>
                        Quizá una de las secciones más importantes e inócuas a la vez...
                        ¿qué sería de un sitio web sin esta sección?...
                        <p>
                            pues bien, en oportunidades su ausencia significaría menos reclamos que atender y más usuarios desesperados
                            <p>
                                por esgrimir improperios.
                            </p>
                        </p>

                    </p>
                    <hr />
                    <p className="mb-0">
                        La única sección que vale la pena visitar es el catálogo.
                    </p>
                </Alert>
            </div>
        </div >
    )
}
