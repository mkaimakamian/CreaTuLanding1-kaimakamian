import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import logoVM from '../assets/vm.png'


export default function Layout() {

    return (
        <>
            <NavBar logo={logoVM} />
            <Outlet />
        </>
    )
}
