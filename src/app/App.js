import ButtonSocial from '../widgets/ButtonSocial/ButtonSocial';
import { ButtonUp } from '../shared/ui/ButtonUp/ButtonUp';
import { RouterProvider } from './providers/router/RouterProvider/RouterProvider';
import './styles/index.scss'

function App() {
  return (
    <div>
      <RouterProvider />
      <ButtonUp />
      <ButtonSocial />
    </div>
  );
}

export default App;
