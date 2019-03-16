import React from 'react';
import { Col, Divider, Icon, Skeleton, List, Avatar, Row, Progress, Typography } from 'antd';
import '../App.css';

const { Title, Paragraph, Text } = Typography;

const list = [
  {
    title: 'Oil',
    percentage: 95,
    threshold: 4
  },
  {
    title: 'Engine',
    percentage: 44,
    threshold: 12
  },
  {
    title: 'Brake Pads',
    percentage: 52,
    threshold: 24
  },
  {
    title: 'Rustproofing',
    percentage: 74,
    threshold: 36
  }
];

const seasons = {
  1: 'Winter',
  2: 'Winter',
  3: 'Winter',
  4: 'Winter',
  5: 'Summer',
  6: 'Summer',
  7: 'Summer',
  8: 'Summer',
  9: 'Summer',
  10: 'Summer',
  11: 'Winter',
  12: 'Winter'
};

const TireStatus = ({ title, maximum, pushNotifications }) => {
  const currentDate = new Date();

  const currentSeason = seasons[currentDate.getMonth()];

  return (
    <React.Fragment>
      <Row gutter={16}>
        <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {currentSeason === 'Summer' && (
            <Avatar shape="square" size={64} src="https://i.imgur.com/Wi7F8nA.png" />
          )}
          {currentSeason === 'Winter' && (
            <Avatar shape="square" size={64} src="https://i.imgur.com/AatpJB9.png" />
          )}
        </Col>
        <Col span={16}>
          <Row gutter={8}>
            {currentSeason === 'Summer' && <Title level={4}>It's summer time!</Title>}
            {currentSeason === 'Winter' && <Title level={4}>It's winter time!</Title>}
          </Row>
          <Row gutter={16}>
            <Text>{`Your last appointment was on ${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}. `}</Text>
            {currentSeason === 'Summer' && (
              <Paragraph>You are due for a tire change. Do you want to book one now?</Paragraph>
            )}
            {currentSeason === 'Winter' && (
              <Paragraph>You are due for a tire change. Do you want to book one now?</Paragraph>
            )}
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default TireStatus;
