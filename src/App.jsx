
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import logoVM from './assets/vm.png'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    < >
      {/* Loguito obtenido de <a href="https://www.flaticon.com/free-icons/vending-machine" title="vending machine icons">Vending machine icons created by Freepik - Flaticon</a> */}
      <NavBar logo={logoVM} />
      <ItemListContainer message="No hay nada que mostrar!" />


    </>
  )
}

export default App
