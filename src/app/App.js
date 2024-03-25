import { Navbar } from '../widgets/Navbar/Navbar';
import { RouterProvider } from './providers/router/RouterProvider/RouterProvider';
import './styles/index.scss'

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider />
    </div>
  );
}

export default App;
