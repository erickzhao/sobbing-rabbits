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
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
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
                  Technical testing 2015-09-01
                </Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
              </Timeline>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default History;
