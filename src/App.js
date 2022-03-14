import { NavBar } from './Components/NavBar';
import { ItemCounter } from './Components/counter/ItemCounter';
import { ItemListContainer } from './Components/Item/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItemDetailContainer } from './Components/detail/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />    
      <ItemDetailContainer />
    </>
  );
}

export default App;