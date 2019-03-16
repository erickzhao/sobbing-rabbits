import React, { useState } from 'react';
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
  Icon,
  Avatar
} from 'antd';
import '../App.css';
import locale from 'antd/lib/date-picker/locale/en_US';
import { save, get } from '../util/apt';

const { Content } = Layout;
const { Option } = Select;
const { Title } = Typography;

const Appointment = props => {
  const [apt, setApt] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleType = value => {
    setApt({
      type: value,
      date: apt.date,
      time: apt.time
    });
  };

  const handleDate = value => {
    setApt({
      type: apt.type,
      date: value,
      time: apt.time
    });
  };

  const handleTime = value => {
    setApt({
      type: apt.type,
      date: apt.date,
      time: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    save(apt);
    setSubmit(true);
    console.log(get());
  };

  if (submit) {
    return (
      <Layout style={{ height: '90vh' }}>
        <Content style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Avatar icon="check-circle" size={64} />
            <Title>You have set up your appointment!</Title>
          </div>
        </Content>
      </Layout>
    );
  }

  return (
    <Layout style={{ paddingTop: 100, minHeight: '100vh' }}>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Row type="flex" justify="center">
            <Col>
              <Card style={{ display: 'flex', width: 350, justifyContent: 'center' }}>
                <div
                  style={{
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'space-around'
                  }}
                >
                  <Form.Item>
                    <Select defaultValue="Select type" style={{ width: 220 }} onChange={handleType}>
                      <Option value="OIL">Oil</Option>
                      <Option value="ENGINE">Engine</Option>
                      <Option value="BRAKE_PADS">Brake Pads</Option>
                      <Option value="RUSTPROOFING">Rustproofing</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item>
                    <DatePicker locale={locale} style={{ width: 220 }} onChange={handleDate} />
                  </Form.Item>

                  <Form.Item>
                    <TimePicker
                      use12Hours
                      minuteStep={30}
                      format="h:mm a"
                      style={{ width: 220 }}
                      onChange={handleTime}
                    />
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

export default Appointment;
