import React from 'react';
import { Col, Divider, Icon, Skeleton, List, Avatar, Row, Progress, Typography } from 'antd';
import '../App.css';

const { Title, Paragraph, Text } = Typography;

const list = [
  {
    title: 'Oil',
    percentage: 95,
    threshold: 1
  },
  {
    title: 'Engine',
    percentage: 44,
    threshold: 1.3
  },
  {
    title: 'Brake Pads',
    percentage: 52,
    threshold: 4
  },
  {
    title: 'Rustproofing',
    percentage: 74,
    threshold: 3
  }
];

const ProgressBar = ({ title, maximum, pushNotifications }) => {
  const purchaseAppointment = new Date(new Date().setFullYear(new Date().getFullYear() - 1));

  const isDueAppointment = item => getPercentage(item) < 30;

  const getPercentage = ({ value, threshold }) => {
    const percentage =
      (new Date().getTime() - purchaseAppointment.getTime()) / (threshold * 31557600000);

    if (percentage < 100) {
      return 100 - Math.round((percentage * 100) % 100);
    }

    return 0;
  };

  const getStatus = item => {
    const percentage = getPercentage(item);

    if (percentage < 1) {
      return 'exception';
    }
    if (percentage < 30) {
      return 'normal';
    }

    return 'success';
  };

  const getDescription = (item) => {
    const lastAppStr = `Last ${item.title.toLowerCase()} change appointment: ${purchaseAppointment.getDate()}/${purchaseAppointment.getMonth()}/${purchaseAppointment.getFullYear()}.`;

    return isDueAppointment(item) ? lastAppStr + ' You are due for an appointment!' : lastAppStr;
  }

  return (
    <React.Fragment>
      <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item actions={[<a>book</a>]}>
            <List.Item.Meta
              avatar={<Progress type="circle" percent={getPercentage(item)} status={getStatus(item)} width={80} />}
              title={<Title level={4}>{item.title}</Title>}
              description={getDescription(item)}
            />
          </List.Item>
        )}
      />
    </React.Fragment>
  );
};

export default ProgressBar;
