import { useLocation } from 'react-router-dom';

import { ButtonUp } from '../shared/ui/ButtonUp/ButtonUp';
import { RouterProvider } from './providers/router/RouterProvider/RouterProvider';
import './styles/index.scss';
import { HeaderCatalog } from '../widgets/HeaderCatalog/HeaderCatalog';
import { Header } from '../widgets/Header/Header';

function App() {
  let location = useLocation();
  console.log(location)

  return (
    <div>
      {
        location.pathname === '/catalog' ? <HeaderCatalog /> : <Header />
      }
      <RouterProvider />
      <ButtonUp />
    </div>
  );
}

export default App;
