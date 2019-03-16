import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Login from './components/Login';

const { Header, Footer } = Layout;

const App = () => (
  <Layout>
    <Header>My Car Dashboard</Header>
    <Login />
    <Footer>Hello</Footer>
  </Layout>
);

export default App;
