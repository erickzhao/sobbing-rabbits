import React from 'react';
import {
  Form,
  Select,
  Input,
  DatePicker,
  Switch,
  Slider,
  Layout,
  Card,
  Row,
  Col,
  Avatar,
  Button
} from 'antd';
import './App.css';

const { Header, Footer, Content } = Layout;

const App = () => (
  <Layout>
    <Header>My Car Dashboard</Header>
    <Layout style={{ paddingTop: 100, minHeight: '100vh' }}>
      <Content>
        <Row justify="center" type="flex">
          <Col>
            <Card>
              <Avatar size={64} icon="user" />
              <Form style={{ marginTop: 32 }}>
                <Form.Item>
                  <Input placeholder="Login" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Password" />
                </Form.Item>
                <Form.Item style={{ textAlign: 'center' }}>
                  <Button type="primary" htmlType="submit">
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
    <Footer>Hello</Footer>
  </Layout>
);

export default App;
