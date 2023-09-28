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
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
