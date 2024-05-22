import { ButtonUp } from '../shared/ui/ButtonUp/ButtonUp';
import { RouterProvider } from './providers/router/RouterProvider/RouterProvider';
import { Header } from '../widgets/Header/Header';

import './styles/index.scss';

function App() {

  return (
    <div>
      <Header />
      <RouterProvider />
      <ButtonUp />
    </div>
  );
}

export default App;
