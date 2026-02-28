// src/router/AppRouter.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, ConstructionPage } from '../app/pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/main/home" element={<HomePage />} />
      <Route path="*" element={<ConstructionPage />} />
    </Routes>
  );
};
