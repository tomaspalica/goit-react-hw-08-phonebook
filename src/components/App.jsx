import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import { Contacts } from 'pages/contacts';

import css from '../css/App.module.css';
import { HomePage } from 'pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { PageNotFound } from 'pages/PageNotFound';
import { SharedLayout } from 'pages/SharedLayout';
import { Login } from 'pages/Login';
import { Register } from 'pages/register';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
