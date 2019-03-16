import React from 'react';
import { Layout, Card, Avatar, Typography, Statistic, Row, Col, Button, Divider } from 'antd';
import '../App.css';

const { Title } = Typography;

const { Content } = Layout;

const data = {
  make: 'Toyota',
  model: 'Camry',
  year: 2018,
  trim: 'EX',
  vin: '8675309'
};

const Hub = () => {
  const { make, model, year, trim, vin } = data;
  return (
    <Layout style={{ paddingTop: 100, minHeight: '100vh' }}>
      <Content style={{ display: 'flex', justifyContent: 'center' }}>
        <Card className="hub--card">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Avatar size={128} icon="car" style={{ margin: 20 }} />
            <div style={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
              <Title style={{ margin: 0 }}>{`${make} ${model}${` ${trim}`} ${year}`}</Title>
              <Title style={{ margin: 0 }} level={4}>
                VIN:
                {vin}
              </Title>
            </div>
          </div>
          <Card title="Car Details" style={{ marginBottom: 40 }}>
            <Row gutter={16}>
              <Divider>Warranty Information</Divider>
              <Col span={12} style={{ margin: '10px 0 20px' }}>
                <Statistic title="Expiry" value="June 19, 2020" />
              </Col>
              <Col span={12} style={{ margin: '10px 0 20px' }}>
                <Typography>Support</Typography>
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
                <Statistic title="Drive Train" value="Front Wheel Drive" />
              </Col>
              <Col span={12} style={{ margin: '10px 0 20px' }}>
                <Statistic title="Fuel Type" value="Gasoline" />
              </Col>
            </Row>
          </Card>
          <Card title="Purchase Information" style={{ marginBottom: 40 }}>
            <Row gutter={16}>
              <Col span={12}>
                <Statistic title="Purchase Date" value="March 10, 2019" />
              </Col>
              <Col span={12}>
                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                <Button style={{ marginTop: 16 }} type="primary">
                  Recharge
                </Button>
              </Col>
            </Row>
          </Card>
        </Card>
      </Content>
    </Layout>
  );
};

export default Hub;
