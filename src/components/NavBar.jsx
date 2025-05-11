import { Container, Nav, Navbar } from "react-bootstrap"
import CartWidget from "./CartWidget"

const NavBar = ({ logo }) => {
    return <Navbar expand="lg" className="bg-primary-subtle p-0">
        <Container fluid>
            <Navbar.Brand href="#"><img src={logo} alt="Vending Machine logo" height="24" width="24" /></Navbar.Brand>
            <Nav.Link href="#action1">Catálogo</Nav.Link>
            <Nav.Link href="#action2">Nosotros</Nav.Link>
            <Nav.Link href="#action3">Contacto</Nav.Link>
            <CartWidget />
        </Container>
    </Navbar>
}

export default NavBar