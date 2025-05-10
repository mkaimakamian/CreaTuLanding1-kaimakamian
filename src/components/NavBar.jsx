import CartWidget from "./CartWidget"

const NavBar = ({ logo }) => {
    return <nav>
        <img src={logo} alt="Vending Machine logo" height={24} width={24} />
        <div>
            <p>Catálogo</p>
            <p>Nosotros</p>
            <p>Contacto</p>
        </div>

        <CartWidget />
    </nav>
}

export default NavBar