import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import logoVM from '../assets/vm.png'


export default function Layout() {

    return (
        <>
            {/* Loguito obtenido de <a href="https://www.flaticon.com/free-icons/vending-machine" title="vending machine icons">Vending machine icons created by Freepik - Flaticon</a> */}
            <NavBar logo={logoVM} />
            <Outlet />
        </>
    )
}
