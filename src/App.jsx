import React from 'react';
import { Layout, Steps, Typography, Divider, List, Card, Row, Col, Menu, Affix, Drawer } from 'antd';
import { MenuOutlined, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import './App.css'; // Make sure to create an App.css file in the same folder as this file

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

function App() {
  
  const productSections = [
    {
      title: 'Custom Plastic Masterbatches',
      content: [
        'Fire retardant packages',
        'Conductive (ESD) packages',
        'AO/UV/Wax packages',
        'Desired fillers (talc, glass spheres, carbon black, graphene, CNT)',
        'Impact modifier packages (improve toughness and crack resistance)',
        'Standard colors',
        'Fluorescent colors',
        'Flow modifiers (reduce scrap rate and molding pressures)',
        'Carriers-TPE, TPV, TPU, PE, PP, Ionomers',
      ],
      imgSrc: 'im3.png',
      
      isList: true
    },
    {
      title: 'Custom Rubber Masterbatches',
      content: [
        'Fillers-talc, barium sulfate',
        'Carbon black',
        'Specialized fillers- graphene, CNT',
        'Curatives',
        'Accelerators',
        'Retarders, sulfurs',
        'Standard colors',
        'Fluorescent colors',
        'Flame retardants',
      ],
      imgSrc: 'im11.png'
      ,
      isList: true,
    },
    {
      title: 'Crosslinkable Injection Moldable TPU',
      content: [
        'Injection moldable TPU with a crosslinker',
        'This crosslinker is stable during injection molding',
        'Curing happens over a period and significantly improves tensile strength and abrasion resistance of plastic. Both UV stable and indoor (non UV) options are available',
        'Low scrap rate can be achieved with this resin',
      ],
      imgSrc: 'im12.png',
      isList: true,
    },
    {
      title: 'Ionomers',
      content: [
        'Impact resistant ionomers that are tougher than polyolefins. Can be used at 100% loading or compatibilizers with polyolefins',
        'Better abrasion resistance',
        'Better puncture and tear resistance',
        'Great adhesion to PE and PP',
        'Higher residue upon combustion',
        'Excellent grease and oil resistance',
      ],
      imgSrc: 'im6.png',
      isList: true,
    },
    {
      title: 'X-ray Visible Polymers',
      content: [
        'Polymers that are visible under X rays are available',
        'Better cut and abrasion resistance',
        'Better impact and UV resistance',
        'Non reactive and safer alternatives to other materials',
        'Iodine free',
      ],
      imgSrc: 'im7.png',
      isList: true,
    },
    {
      title: 'SEM Imaging',
      content: [
        'SEM imaging is available for parts/samples',
        'Elemental analysis of surface is also an option',
        'Surface texture, size, feature analysis',
        'Metal/plastics/inorganic- all materials can be analyzed',
      ],
      imgSrc: 'im8.png',
      isList: true,
    },
    // ... other product sections ...
  ];

  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleClick = (item) => {
    console.log('Clicked:', item);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const materials = [
    'Custom Plastic Masterbatches',
    'Custom Rubber Masterbatches',
    'Crosslinkable Injection Moldable TPU',
    'Ionomers',
    'X-ray Visible Polymers',
    'SEM Imaging',
  ];

  const industries = [
'Automotive',
'Aerospace and defense',
'Golf',
'Agriculture',
'Industrial',
'Consumer products',
'Robotics',
'Energy',
]; // Add industries here

  return (
    <Layout>
      <Affix offsetTop={0}>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={() => scrollToSection('about')}>
              About
            </Menu.Item>
            <Menu.Item key="2" onClick={() => scrollToSection('products')}>
              Products
            </Menu.Item>
            <Menu.Item key="4" onClick={() => scrollToSection('materials')}>
              Materials
            </Menu.Item>
            <Menu.Item key="5" onClick={() => scrollToSection('industries')}>
              Industries
            </Menu.Item>
            <Menu.Item key="6" onClick={() => scrollToSection('contact')}>
              Contact
            </Menu.Item>
            <Menu.Item key="7" className="menu-logo" onClick={() => scrollToSection('header')}>
              Premium Plastics Group
            </Menu.Item>
          </Menu>
        </Header>
      </Affix>
      <Content style={{ padding: '50px 50px' }}>
        <Typography id="header">
          <Title>Premium Plastics Group</Title>
        </Typography>
        <Divider />
        <Typography id="about">
  <Title level={3} className="section-title">About Us</Title>
  <Paragraph className="large-text">
    We are a group of professionals who are here to offer you the best plastic raw materials for your applications.
    All the professionals involved have decades of experience in plastics extrusion, molding, and compounding.
  </Paragraph>
  <Title level={4}>Products that we offer</Title>
  <List
    className="large-text"
    
    dataSource={[
      'Custom plastic masterbatches',
      'Custom rubber masterbatches',
      'Research level masterbatches',
      'Crosslinkable injection moldable TPU. No post cure required. Flows like a TPU yet performs like a thermoset',
      'Ionomers with improved toughness (Next generation polyethylene (PE))',
      'X ray visible polymers',
      'SEM imaging for customers',
    ]}
    renderItem={(item) => <List.Item>{item}</List.Item>}
  />
</Typography>
       <Divider />
        {productSections.map((section, index) => (
          <React.Fragment key={index}>
            <Typography id={section.title.replace(/ /g, '-').toLowerCase()}>
              <Title level={3} className="section-title">{section.title}</Title>
              <Row>
                <Col xs={24} sm={12}>
                  <img className="product-image" src={section.imgSrc} alt={section.title} />
                </Col>
                <Col xs={24} sm={12}>
                  {section.isList ? (
                    <ul className="list-content">
                      {section.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <Paragraph>{section.content}</Paragraph>
                  )}
                </Col>
              </Row>
            </Typography>
            <Divider />
          </React.Fragment>
        ))}
        <Divider />
<Typography id="industries">
<Title level={3} className="section-title">Industries</Title>
<Row gutter={[16, 16]}>
{industries.map((industry, index) => (
<Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
<Card onClick={() => handleClick(industry)} hoverable>
{industry}
</Card>
</Col>
))}
</Row>
</Typography>
<Divider />
<Typography id="contact">
<Title level={3} className="section-title">Contact Us</Title>
<Paragraph className="section-text">
<MailOutlined /> Email: contact@cncparts.com
</Paragraph>
<Paragraph className="section-text">
<PhoneOutlined /> Phone: (123) 456-7890
</Paragraph>
<Paragraph className="section-text">
<GlobalOutlined /> Website: www.cncparts.com
</Paragraph>
</Typography>
</Content>
<Footer style={{ textAlign: 'center' }}>CNC Parts ©2023. All Rights Reserved.</Footer>
    </Layout>
  );
}

export default App;