import { Menu, Icon, Layout, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import Info from './Info';
import Maintenance from './Maintenance';
import History from './History';
import Appointment from './Appointment';

const MenuItemGroup = Menu.ItemGroup;
const { Header, Sider, Content, Footer } = Layout;

const Dashboard = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {});

  const handleClick = e => {
    setPage(e.key);
  };

  return (
    <Layout>
      <Header>
        <Button onClick={() => {localStorage.setItem('isLoggedIn', false); window.location.reload();}}>Log Out</Button>
      </Header>
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0
          }}
        >
          <Menu
            onClick={handleClick}
            style={{ height: '100%' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Info</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="tool" />
              <span>Maintenance</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="schedule" />
              <span>Appointment</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="clock-circle" />
              <span>History</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          {{ 1: <Info />, 2: <Maintenance />, 3: <Appointment />, 4: <History /> }[page]}
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Dashboard;
