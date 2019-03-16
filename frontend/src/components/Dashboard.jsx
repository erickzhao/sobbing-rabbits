import { Menu, Icon, Layout } from 'antd';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Info from './Info';
import Maintenance from './Maintenance';
import History from './History';
import Appointment from './Appointment';

const SubMenu = Menu.SubMenu;
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
      <Header>Header</Header>
      <Layout>
        <Sider>
          <Menu
            onClick={handleClick}
            style={{ minHeight: '100vh' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="inbox" />
              <span>Option 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>{{ 1: <Info />, 2: <Maintenance />, 3: <Appointment /> }[page]}</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Dashboard;
