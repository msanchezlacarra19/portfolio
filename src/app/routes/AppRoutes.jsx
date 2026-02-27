import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Page404 } from '../pages/Page404';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/*" element={ <Page404 /> } />
        <Route path="/home" element={ <HomePage />  } />
    </Routes>
  )
}