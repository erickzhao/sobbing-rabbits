import React from 'react';
import {
  DatePicker,
  TimePicker,
  Col,
  Card,
  Button,
  Form,
  Input,
  Layout,
  Row,
  Typography,
  Select,
  Divider,
  Icon
} from 'antd';
import '../App.css';
import locale from 'antd/lib/date-picker/locale/en_US';

const { Content } = Layout;
const Option = Select.Option;

const appointment = props => {
  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  return (
    <Layout style={{ paddingTop: 100, minHeight: '100vh' }}>
      <Content>
        <Form onSubmit={handleSubmit} className="appointment-form">
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
                  <Select defaultValue="Type 1" style={{ width: 220 }} onChange={handleChange}>
                    <Option value="Type 2">Type 2</Option>
                    <Option value="Type 3">Type 2</Option>
                    <Option value="Type 4">Type 3</Option>
                  </Select>

                  <DatePicker locale={locale} style={{ width: 220 }} />

                  <TimePicker style={{ width: 220 }} />

                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
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
