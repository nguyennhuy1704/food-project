import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FoodPage from './FoodPage';
import HomePage from './index';
const MainPage = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/food" element={<FoodPage />} />
        </Routes>
    );
};

export default MainPage;
