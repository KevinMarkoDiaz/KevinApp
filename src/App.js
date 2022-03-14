import { NavBar } from './Components/NavBar';
import { ItemCounter } from './Components/counter/ItemCounter';
import { ItemListContainer } from './Components/Item/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (    
    <>
    <NavBar/>
    <ItemListContainer/>
    <ItemCounter
      stock={10}
      initial={2}
    />
    </>    
  );
}

export default App;