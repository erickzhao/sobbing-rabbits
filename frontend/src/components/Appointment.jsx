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
  Divider
} from 'antd';
import '../App.css';
import locale from 'antd/lib/date-picker/locale/en_US';

const { Content } = Layout;
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}



const appointment = props => {
  return (
    <Layout style={{ paddingTop: 100, minHeight: '100vh' }}>
      <Content>
        <Row type="flex" justify="center">
          <Col>
            <Card style={{display:"flex", width:350, justifyContent: "center"}}>
              <div
                style={{
                  flexDirection: 'column',
                  display: 'flex',
                  height: 300,
                  justifyContent: 'space-around'
                }}
              >
                <Typography>Select an appointment type</Typography>
                <Select defaultValue="Type 1" style={{ width: 120 }} onChange={handleChange}>
                  <Option value="Type 2">Type 2</Option>
                  <Option value="Type 3">Type 2</Option>
                  <Option value="Type 4">Type 3</Option>
                </Select>
                <Typography>Select a date</Typography>
                <DatePicker locale={locale} />
                <Typography>Select a time</Typography>
                <TimePicker />
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default appointment;
