import './App.css'

//외부 컴포넌트 import
import MenuItems from './ui/MenuItems';
import AppRoutes from './routes/AppRoutes';

function App(){
  return (
    <>
      <MenuItems/>
      <AppRoutes/>
    </>
  );
}

export default App;