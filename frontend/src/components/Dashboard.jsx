import { Menu, Icon, Layout } from 'antd';
import React from 'react';
import Slider from 'react-slick';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Sider, Content, Footer } = Layout;

const Dashboard = () => {
  const handleClick = e => {
    console.log('click', e);
  };

  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>
          <Menu
            onClick={handleClick}
            style={{ width: 256, minHeight: '100vh' }}
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
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Dashboard;
