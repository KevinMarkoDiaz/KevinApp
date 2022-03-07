import { NavBar } from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer';
import { ItemCounter } from './Components/counter/ItemCounter';
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