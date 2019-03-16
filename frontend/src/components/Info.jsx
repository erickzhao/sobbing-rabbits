/* eslint-disable camelcase */

import React from 'react';
import { Layout, Card, Avatar, Typography, Statistic, Row, Col, Button, Divider } from 'antd';
import '../App.css';
import Parser from 'html-react-parser';

import data1 from '../config/user1';
import data2 from '../config/user2';

const { Title } = Typography;

const { Content } = Layout;

const data = localStorage.getItem('user') === 'johnsmith' ? data1 : data2;

const Hub = () => {
  const {
    inventory_make,
    inventory_model,
    car_photo,
    car_year,
    car_id,
    fuel,
    drive_train,
    brake_desc,
    engine_desc,
    suspension_desc,
    general_desc,
    date_sold
  } = data;

  return (
    <Layout style={{ paddingTop: 100, minHeight: '100vh' }}>
      <Content style={{ display: 'flex', justifyContent: 'center' }}>
        <Card className="hub--card" style={{ maxWidth: 900 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}
          >
            <Avatar size={128} style={{ margin: 20 }} src={car_photo} />
            <div style={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
              <Title style={{ margin: 0 }}>
                {`${inventory_make} ${inventory_model} ${car_year}`}
              </Title>
              <Title style={{ margin: 0 }} level={4}>
                VIN:
                {car_id}
              </Title>
            </div>
          </div>
          <Card title="Car Details" style={{ marginBottom: 40 }}>
            <Row gutter={16}>
              <Divider>General Description</Divider>
              <Col span={24} style={{ margin: '10px 0 20px' }}>
                {Parser(`<span>${general_desc}</span>`)}
              </Col>
              <Divider>Warranty Information</Divider>
              <Col span={12} style={{ margin: '10px 0 20px' }}>
                <Statistic title="Time" value="6" suffix="months" />
              </Col>
              <Col span={12} style={{ margin: '10px 0 20px' }}>
                <Statistic title="Odometer" value="10,000" suffix="km" />
              </Col>
              <Divider>Fuel efficiency</Divider>
              <Col span={12} style={{ margin: '10px 0 20px' }}>
                <Statistic title="MPG (Highway)" value="39" suffix="MPG" />
              </Col>
              <Col span={12} style={{ margin: '10px 0 20px' }}>
                <Statistic title="MPG (Local)" value="41" suffix="MPG" />
              </Col>
              <Divider style={{ margin: '10 0' }}>Under the hood</Divider>
              <Col span={12} style={{ margin: '10px 0 20px' }}>
                <Statistic title="Drive Train" value={drive_train} />
              </Col>
              <Col span={12} style={{ margin: '10px 0 20px' }}>
                <Statistic title="Fuel Type" value={fuel} />
              </Col>
              <Divider style={{ margin: '10 0' }}>Brakes</Divider>
              <Col span={24} style={{ margin: '10px 0 20px' }}>
                {Parser(`<div>${brake_desc}</div>`)}
              </Col>
              <Divider style={{ margin: '10 0' }}>Engine</Divider>
              <Col span={24} style={{ margin: '10px 0 20px' }}>
                {Parser(`<div>${engine_desc}</div>`)}
              </Col>
              <Divider style={{ margin: '10 0' }}>Suspension</Divider>
              <Col span={24} style={{ margin: '10px 0 20px' }}>
                {Parser(`<div>${suspension_desc}</div>`)}
              </Col>
            </Row>
          </Card>
          <Card title="Purchase Information" style={{ marginBottom: 40 }}>
            <Row gutter={16}>
              <Col span={12}>
                <Statistic title="Purchase Date" value={new Date(date_sold).toLocaleDateString()} />
              </Col>
              <Col span={12}>
                <Statistic title="Purchased From" value="Volvo Laval" />
                <a href="https://www.volvolaval.com">
                  <Button style={{ marginTop: 16 }} type="primary">
                    Go to Site
                  </Button>
                </a>
              </Col>
            </Row>
          </Card>
        </Card>
      </Content>
    </Layout>
  );
};

export default Hub;
