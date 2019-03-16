import React from 'react';
import { Layout, Card, Avatar, Typography, Statistic, Row, Col, Button, Divider, T } from 'antd';
import '../App.css';
import ProgressBar from './ProgressBar';
import TireStatus from './TireStatus';

const { Title } = Typography;

const { Content } = Layout;

const Maintenance = props => {
  return (
    <Layout style={{ paddingTop: 100, minHeight: '100vh' }}>
      <Content style={{ display: 'flex', justifyContent: 'center' }}>
        <Card className="hub--card">
          <Card title="Life status" style={{ marginBottom: 40 }}>
            <Row gutter={16}>
              <ProgressBar title="Engine" />
            </Row>
          </Card>
          <Card title="Tire status" style={{ marginBottom: 40 }}>
            <TireStatus />
          </Card>
          <Card title="Pending recalls" style={{ marginBottom: 40 }}>
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

export default Maintenance;
