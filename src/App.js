import { NavBar } from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer';
import { Counter } from './Components/counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (    
    <>
    <NavBar/>
    <ItemListContainer/>
    <Counter/>
    </>    
  );
}

export default App;
