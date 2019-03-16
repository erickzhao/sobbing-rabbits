/* eslint-disable camelcase */

import React from 'react';
import { Layout, Card, Avatar, Typography, Statistic, Row, Col, Button, Divider } from 'antd';
import '../App.css';
import Parser from 'html-react-parser';

const { Title } = Typography;

const { Content } = Layout;

const additionalData = {
  air_tax: 100.0,
  brake_desc:
    '<b>Front Brake Type :</b> 16" Ventilated Disc<br/><b>Front Brake Diameter (mm/in) :</b> 294 mm / 11.6 in.<br/><b>Rear Brake Type :</b> 14" Solid Disc<br/><b>Rear Brake Diameter (mm/in) :</b> 262 mm / 10.3 in<br/><b>Anti-lock Braking System :</b> 4-sensor 4-channel with EBD<br/><b>Swept Area - front (sq. in) :</b> 229.7 sq. in.<br/><b>Swept Area - rear (sq. in) :</b> 152.0 sq. in.<br/><b>Total Swept Area (sq. in) :</b> 381.7 sq. in.',
  engine_desc:
    '<b>Engine Type :</b> 2.4L MIVEC<br/><b>Engine Code :</b> 4G69<br/><b>Valve Train :</b> SOHC 16 valve<br/><b>Displacement (cc/cu in.) :</b> 2378 cc / 145.1 cu. in.<br/><b>Bore x Stroke (mm/in.) :</b> 87.0 x 100.0 mm / 3.43 x 3.94 in.<br/><b>Compression ratio :</b> 9.5 : 1<br/><b>Horsepower @ RPM :</b> 162 hp @ 6,000 rpm<br/><b>Torque @ RPM (lbs-ft.) :</b> 162 lb.-ft. @ 4,000 rpm<br/><b>Engine Block :</b> Cast Iron<br/><b>Cylinder Heads :</b> Aluminum<br/><b>Redline RPM :</b> 6,500 rpm<br/><b>Fuel System :</b> MPI<br/><b>Recommended Fuel :</b> Unleaded (Regular)<br/><b>Radiator Core Size :</b> 747x350x16 mm<br/><b>Engine Oil Type :</b> 5W-20<br/><b>Engine Oil Capacity (L/qt.) :</b> 3.0-4.0 L / 3.2-4.2 qt.',
  fuel_highway: 7.3,
  fuel_town: 10.6,
  general_desc:
    'Athletic Performance\n\nThe aggressively sculpted style of the Eclipse Coupe is pedestal worthy. But from the moment you slip behind the wheel, the powerful rush of the engine combined with the ultra-smooth precision handling, leaves no doubt this muscular vehicle is best exercised on pavement.\n\nWhether you hit the highway or cruise the city, the Eclipse delivers the power you crave for your next adventure. \n\nChoose between two strong engines: the spirited GS 2.4-litre 4-cylinder engine or the explosive power of the GT\u2019s 3.8-litre V6 engine. \n\nThanks to its rigid frame and low mount multi-link rear suspension, the Eclipse delivers thrilling handling that keeps the rubber on the road.\n',
  green_tax: null,
  suspension_desc:
    '<b>Front :</b> MacPherson strut<br/><b>Front Stabilizer Bar Diameter (mm) :</b> 22 mm<br/><b>Rear :</b> Low mount multi link<br/><b>Rear Stabilizer Bar Diameter (mm) :</b> 20 mm'
};

const data = {
  car_id: 4108071,
  car_year: 2011,
  date_sold: 'Fri, 04 May 2012 00:00:00 GMT',
  drive_train: null,
  engine_type: '8',
  fuel: 'Unleaded',
  induction: null,
  inventory_make: 'Ford',
  inventory_model: 'Mustang',
  inventory_trim: 'GT',
  transmission_gear: 0,
  user_id: 323950,
  user_name: 'John Smith',
  warranty_class: 'Class A : 6 months or 10,000 km.',
  ...additionalData
};

const Hub = () => {
  const {
    inventory_make,
    inventory_model,
    car_year,
    inventory_trim,
    car_id,
    fuel,
    drive_train,
    brake_desc,
    engine_desc,
    suspension_desc,
    general_desc
  } = data;

  return (
    <Layout style={{ paddingTop: 100, minHeight: '100vh' }}>
      <Content style={{ display: 'flex', justifyContent: 'center' }}>
        <Card className="hub--card" style={{maxWidth:900}}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Avatar size={128} icon="car" style={{ margin: 20 }} />
            <div style={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
              <Title style={{ margin: 0 }}>
                {`${inventory_make} ${inventory_model}${` ${inventory_trim}`} ${car_year}`}
              </Title>
              <Title style={{ margin: 0 }} level={4}>
                VIN:
                {car_id}
              </Title>
            </div>
          </div>
          <Card title="Car Details" style={{ marginBottom: 40 }}>
            <Row gutter={16}>
              <Divider>General Description</Divider>
              <Col span={24} style={{ margin: '10px 0 20px' }}>
                {Parser(`<span>${general_desc}</span>`)}{' '}
              </Col>
              <Divider>Warranty Information</Divider>
              <Col span={12} style={{ margin: '10px 0 20px' }}>
                <Statistic title="Time" value="6" suffix="months" />
              </Col>
              <Col span={12} style={{ margin: '10px 0 20px' }}>
                <Statistic title="Odometer" value="10,000" suffix="km" />
              </Col>
              <Divider>Fuel efficiency</Divider>
              <Col span={12} style={{ margin: '10px 0 20px' }}>
                <Statistic title="MPG (Highway)" value="39" suffix="MPG" />
              </Col>
              <Col span={12} style={{ margin: '10px 0 20px' }}>
                <Statistic title="MPG (Local)" value="41" suffix="MPG" />
              </Col>
              <Divider style={{ margin: '10 0' }}>Under the hood</Divider>
              <Col span={12} style={{ margin: '10px 0 20px' }}>
                <Statistic title="Drive Train" value={drive_train} />
              </Col>
              <Col span={12} style={{ margin: '10px 0 20px' }}>
                <Statistic title="Fuel Type" value={fuel} />
              </Col>
              <Divider style={{ margin: '10 0' }}>Brakes</Divider>
              <Col span={24} style={{ margin: '10px 0 20px' }}>
                {Parser(`<div>${brake_desc}</div>`)}
              </Col>
              <Divider style={{ margin: '10 0' }}>Engine</Divider>
              <Col span={24} style={{ margin: '10px 0 20px' }}>
                {Parser(`<div>${engine_desc}</div>`)}
              </Col>
              <Divider style={{ margin: '10 0' }}>Suspension</Divider>
              <Col span={24} style={{ margin: '10px 0 20px' }}>
                {Parser(`<div>${suspension_desc}</div>`)}
              </Col>
            </Row>
          </Card>
          <Card title="Purchase Information" style={{ marginBottom: 40 }}>
            <Row gutter={16}>
              <Col span={12}>
                <Statistic title="Purchase Date" value="March 10, 2019" />
              </Col>
              <Col span={12}>
                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                <Button style={{ marginTop: 16 }} type="primary">
                  Recharge
                </Button>
              </Col>
            </Row>
          </Card>
        </Card>
      </Content>
    </Layout>
  );
};

export default Hub;
