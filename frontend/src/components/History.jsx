import React from 'react';
import { Layout, Timeline, Icon, Row, Col, Card } from 'antd';

const { Content } = Layout;
const History = props => {
  return (
    <Layout style={{ paddingTop: 100, minHeight: '100vh' }}>
      <Content>
        <Row justify="center" type="flex" align="center">
          <Col>
            <Card>
              <Timeline style={{ maxWidth: 300 }}>
                <Timeline.Item>Vehicle purchased 2015-09-01</Timeline.Item>
                <Timeline.Item>Service appointment 2015-11-01</Timeline.Item>
                <Timeline.Item
                  dot={
                    <Icon
                      type="clock-circle-o"
                      theme="outlined"
                      style={{ fontSize: '16px', padding: 0 }}
                    />
                  }
                  color="red"
                >
                  Full checkup 2016-01-01
                </Timeline.Item>
                <Timeline.Item>Tire change 2016-04-01</Timeline.Item>
              </Timeline>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default History;
