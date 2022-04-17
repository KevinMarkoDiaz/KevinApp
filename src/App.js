import { ContextProvider } from './Context/ContextProvider';
import { RouterApp } from './router/RouterApp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <ContextProvider>
        <RouterApp/>
      </ContextProvider>
    </>
  );
}

export default App;