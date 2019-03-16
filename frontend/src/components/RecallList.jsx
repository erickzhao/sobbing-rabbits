import React from 'react';
import { Col, Divider, Icon, Row, Progress, Typography, List, Avatar } from 'antd';
import '../App.css';

const { Title, Paragraph, Text } = Typography;

const RecallList = ({ title, maximum, pushNotifications }) => {
  return (
    <React.Fragment>
      <Row gutter={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text>You have one recall pending from Toyota on your engine!</Text>
      </Row>
    </React.Fragment>
  );
};

export default RecallList;
