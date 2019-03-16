import React from 'react';
import { Col, Divider, Icon, Skeleton, List, Avatar, Row, Progress, Typography } from 'antd';
import '../App.css';
import { save, get } from '../util/apt';

const { Title, Paragraph, Text } = Typography;

const list = [
  {
    title: 'Oil',
    type: "OIL",
    percentage: 95,
    threshold: 1.5
  },
  {
    title: 'Engine',
    type: "ENGINE",
    percentage: 44,
    threshold: 1.3
  },
  {
    title: 'Brake Pads',
    type: "BRAKE_PADS",
    percentage: 52,
    threshold: 4
  },
  {
    title: 'Rustproofing',
    type: "RUSTPROOFING",
    percentage: 74,
    threshold: 2.5
  }
];

const ProgressBar = ({ title, maximum, pushNotifications }) => {
  const purchaseAppointment = new Date(new Date().setFullYear(new Date().getFullYear() - 2));
  const appts = get();

  const getGoodDate = ({value, type}) => {
    const dueAppointment = appts.filter(el => el.type === type).sort((a,b) => new Date(b.date) - new Date(a.date));
    return dueAppointment[0]? new Date(dueAppointment[0].date) : purchaseAppointment;
  }

  const isDueAppointment = item => getPercentage(item) < 30;

  const getPercentage = ({ value, threshold, type }) => {

    const dueAppointment = appts.filter(el => el.type === type).sort((a,b) => new Date(b.date) - new Date(a.date));

    console.log(dueAppointment);

      const goodDate = dueAppointment[0]? new Date(dueAppointment[0].date) : purchaseAppointment;

    const percentage =
      (new Date().getTime() - goodDate.getTime()) / (threshold * 31557600000);

      console.log(percentage);

    if (percentage < 1) {
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
 
    const mydate = getGoodDate(item);

    const lastAppStr = `Last ${item.title.toLowerCase()} change appointment: ${mydate.getDate()}/${mydate.getMonth()}/${mydate.getFullYear()}.`;

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
