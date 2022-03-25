import { PublicRoutes } from './router/PublicRoutes';
import { ContextProvider } from './Context/ContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <ContextProvider>
        <PublicRoutes/>
      </ContextProvider>
    </>
  );
}

export default App;