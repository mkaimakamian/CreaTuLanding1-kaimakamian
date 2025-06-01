import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Aboutus from './pages/aboutus';
import Contactus from './pages/Contactus';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Error from './pages/Error';
import ItemDetail from './components/ItemDetail';

function App() {

  return (
    < >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/:id' element={<ItemDetail />} />
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
