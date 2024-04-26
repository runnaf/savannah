import { Button } from '../shared/ui/Button/Button';
import { Navbar } from '../widgets/Navbar/Navbar';
import { RouterProvider } from './providers/router/RouterProvider/RouterProvider';
import './styles/index.scss'

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider />
      <Button text='войти'/>
    </div>
  );
}

export default App;
