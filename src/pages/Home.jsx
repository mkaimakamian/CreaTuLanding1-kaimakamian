import { Alert } from 'react-bootstrap'

export default function Home() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="d-inline-block">
                <Alert variant="success">
                    <Alert.Heading>Muy buenos días!</Alert.Heading>
                    <p>
                        Sí, lo sé, la home es la puerta de ingreso hacia lo más fantástico que tiene
                        este sitio y
                        <p>
                            encontrar un cartelito como este no es algo de lo más hermoso...
                            pero antes estaba peor :')
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
