import { Header } from '../widgets/Header/Header';
import { RouterProvider } from './providers/router/RouterProvider/RouterProvider';
import './styles/index.scss'

function App() {
  return (
    <div>
      <Header />
      <RouterProvider />
    </div>
  );
}

export default App;
