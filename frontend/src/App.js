import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Dashboard from './components/Dashboard';

const { Header, Footer } = Layout;

const App = () => (
  <Layout>
    <Header>My Car Dashboard</Header>
    <Dashboard />
    <Footer>Hello</Footer>
  </Layout>
);

export default App;
