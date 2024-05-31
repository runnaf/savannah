import ButtonSocial from '../widgets/ButtonSocial/ButtonSocial';
import { ButtonUp } from '../shared/ui/ButtonUp/ButtonUp';
import { RouterProvider } from './providers/router/RouterProvider/RouterProvider';
import { Header } from '../widgets/Header/ui/Header/Header';

import './styles/index.scss';
import styles from './App.module.scss';

function App() {

  return (
    <div className={styles.container}>
      <Header />
      <RouterProvider />
      <ButtonUp />
      <ButtonSocial />
      
    </div>
  );
}

export default App;
