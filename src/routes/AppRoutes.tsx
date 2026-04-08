import { Route, Routes } from "react-router-dom";

import HomePage from '../pages/HomePage';
import FruitOne from './../pages/FruitOne'; // 표현식01
import FruitList from './../pages/FruitList';
import CoffeeOne from './../pages/CoffeeOne';
import CoffeeList from './../pages/CoffeeList';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import UserInfo from '../pages/UserInfo';
import ProductInsertForm from '../pages/ProductInsertForm.tsx';
import ProductUpdateForm from '../pages/ProductUpdateForm.tsx';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';
import type { User } from "../types/User";


interface AppProps {
    user: User | null;
    handleLoginSuccess: (userData: User) => void;
}

function AppRoutes({ user, handleLoginSuccess }: AppProps) {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/fruit' element={<FruitOne />} />
            <Route path='/fruitList' element={<FruitList />} />
            <Route path='/coffee' element={<CoffeeOne />} />
            <Route path='/coffeeList' element={<CoffeeList />} />
            <Route path='/member/info' element={<UserInfo />} />
            <Route path='/member/signup' element={<SignUpPage />} />
            <Route path='/member/login' element={< LoginPage onLogin={handleLoginSuccess} />} />
            <Route path='/product/list' element={<ProductList user={user} />} />
            <Route path='/product/insert' element={<ProductInsertForm user={user} />} />
            <Route path='/product/update/:id' element={<ProductUpdateForm user={user} />} />
            <Route path='/product/detail/:id' element={<ProductDetail user={user} />} />
        </Routes>
    );
}

export default AppRoutes;