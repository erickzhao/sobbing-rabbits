import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App = () => {
  const [isLoggedIn, setLoginStatus] = useState(false);
  const [loading, setLoadingStatus] = useState(true);

  useEffect(() => {
    const storaged = localStorage.getItem('isLoggedIn');
    setLoginStatus(storaged);
    setLoadingStatus(false);
  }, []);

  if (isLoggedIn === "true" && !loading) {
    return <Dashboard />;
  }
  if (isLoggedIn === "false" && !loading) {
    return <Login />;
  }

  return <div />;
};

export default App;
