import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Appointment from './components/Appointment';

const { Header, Footer } = Layout;

const App = () => <Dashboard />;

export default App;
