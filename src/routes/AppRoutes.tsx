import { Route, Routes } from "react-router-dom";

import FruitOne from './../pages/FruitOne'; // 표현식01
import FruitList from './../pages/FruitList';
import CoffeeOne from './../pages/CoffeeOne';
import CoffeeList from './../pages/CoffeeList';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/fruit' element={<FruitOne />} />
            <Route path='/fruitList' element={<FruitList />} />
            <Route path='/coffee' element={<CoffeeOne />} />
            <Route path='/coffeeList' element={<CoffeeList />} />
        </Routes>
    );
}

export default AppRoutes;