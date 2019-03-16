import React from 'react';
import { Col, Divider, Icon, Row, Progress, Typography, List, Avatar } from 'antd';
import '../App.css';

const { Title, Paragraph, Text } = Typography;

const ProgressBar = ({ title, maximum, pushNotifications }) => {
  return (
    <React.Fragment>
      <Row gutter={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Col span={12} style={{ margin: '10px 0 20px', textAlign: 'center' }}>
          <Progress type="circle" percent={30} width={80} />
        </Col>
        <Col span={12} style={{ margin: '10px 0 20px', verticalAlign: 'center' }}>
          <Title level={4}>{title}</Title>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProgressBar;
