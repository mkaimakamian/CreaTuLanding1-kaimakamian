
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import logoVM from './assets/vm.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Aboutus from './pages/aboutus';
import Contactus from './pages/Contactus';
import Catalog from './pages/Catalog';
import Home from './pages/Home';

function App() {

  return (
    < >
      {/* Loguito obtenido de <a href="https://www.flaticon.com/free-icons/vending-machine" title="vending machine icons">Vending machine icons created by Freepik - Flaticon</a> */}
      {/* <ItemListContainer message="No hay nada que mostrar!" /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/contactus' element={<Contactus />} />
            <Route path='/*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
