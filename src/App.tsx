import './App.css'

//외부 컴포넌트 import
import MenuItems from './ui/MenuItems';
import AppRoutes from './routes/AppRoutes';

function App() {
  const appName = 'IT Academy Coffee Shop';
  const appName2 = 3333;

  return (
    <>
      <MenuItems appName={appName} appName2={appName2} />
      <AppRoutes />
      <footer className="bg-dark text-light text-center py-3 mt-5">
        <p>&copy; 2025 {appName}. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;