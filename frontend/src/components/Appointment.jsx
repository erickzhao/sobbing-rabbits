import React from 'react';
import { DatePicker, TimePicker, Col, Card, Button, Form, Layout, Row, Select } from 'antd';
import '../App.css';
import locale from 'antd/lib/date-picker/locale/en_US';

const { Content } = Layout;
const Option = Select.Option;

const appointment = props => {
  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <Layout style={{ paddingTop: 100, minHeight: '100vh' }}>
      <Content>
        <Form>
          <Row type="flex" justify="center">
            <Col>
              <Card style={{ display: 'flex', width: 350, justifyContent: 'center' }}>
                <div
                  style={{
                    flexDirection: 'column',
                    display: 'flex',
                    height: 300,
                    justifyContent: 'space-around'
                  }}
                >
                  <Form.Item>
                    <Select
                      defaultValue="Select type"
                      style={{ width: 220 }}
                      onChange={handleChange}
                    >
                      <Option value="Type 1">Type 1</Option>
                      <Option value="Type 2">Type 2</Option>
                      <Option value="Type 3">Type 3</Option>
                      <Option value="Type 4">Type 4</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item>
                    <DatePicker locale={locale} style={{ width: 220 }} />
                  </Form.Item>

                  <Form.Item>
                    <TimePicker style={{ width: 220 }} />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </div>
              </Card>
            </Col>
          </Row>
        </Form>
      </Content>
    </Layout>
  );
};

export default appointment;
