
import { ButtonUp } from '../shared/ui/ButtonUp/ButtonUp';
import { Header } from '../widgets/Header/Header';
import { RouterProvider } from './providers/router/RouterProvider/RouterProvider';
import './styles/index.scss'

function App() {
  return (
    <div>
      <RouterProvider />
      <ButtonUp />
    </div>
  );
}

export default App;
