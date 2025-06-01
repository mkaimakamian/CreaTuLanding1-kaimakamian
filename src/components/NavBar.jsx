import { Container, Navbar } from "react-bootstrap"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = ({ logo }) => {
    return (
        <Navbar expand="lg" className="bg-primary-subtle p-0 mb-2">
            {/* <Navbar expand="lg" bg="secondary" data-bs-theme="light" className="px-3"> */}
            <Container fluid>
                <Navbar.Brand><Link to={"/"}><img src={logo} alt="Vending Machine logo" height="24" width="24" /></Link></Navbar.Brand>

                <NavLink to={"/catalog"}>Catálogo</NavLink>
                <NavLink to={"/aboutus"}>Acerca de nosotros</NavLink>
                <NavLink to={"/contactus"}>Contactate</NavLink>

                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar