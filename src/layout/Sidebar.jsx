import React, { Component } from 'react';
import './Sidebar.css';
import Items from './Items';
import { Layout, Menu, Icon, Col, Row } from 'antd';
import { Input } from 'antd';
import InnerItems from './InnerItems';
import Chat from './Chat';
import image from './images/ws-1.png'
const { Content, Footer, Sider } = Layout;

export class Sidebar extends Component {



    render() {

        return (
            <div>

                <Layout style={{ minHeight: '100vh' }} >
                    <Col span={1} className="workspace" >
                        <Col mode="inline">
                            <Row>
                                <i class="fas fa-circle workspace-circle" style={{ color: 'red' }}></i>
                                <i class="fas fa-circle workspace-circle" style={{ color: 'yellow' }}></i>
                                <i class="fas fa-circle workspace-circle"></i></Row>
                        </Col>
                        <Col>
                            <Row>

                                <img src={image} alt="workspace" ></img>
                            </Row>
                            <Row>
                                <i class="fab fa-tumblr-square fam"></i>
                            </Row>
                            <Row>
                                <i class="fas fa-plus-square fam"></i>
                            </Row>
                        </Col>

                    </Col>
                    <Sider className="sider">

                        <div className="logo" />
                        <Menu theme="dark" mode="inline" className="sider">
                            <Menu.Item   >
                                <span className="tk">tk-2019</span>
                                <Icon type="down" /> <Icon type="bell" />
                            </Menu.Item>
                            <Menu.Item>
                                <i class="fas fa-circle"></i>
                                <span> Sarah Ahmed</span>
                            </Menu.Item>
                            <Menu.Item >
                                <span style={{ background: '#200720' }}>
                                    <Input
                                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />
                                </span>
                            </Menu.Item>
                            <Menu.Item className="channel">
                                <span >
                                    Channels
                                </span>
                            </Menu.Item>
                            <Items />
                            <InnerItems title={" #announcment"} />
                            <InnerItems title={" #attendence"} />
                            <InnerItems title={" #chat "} />
                            <InnerItems title={" #Web Dev"} />
                            <InnerItems title={" #Life skills"} />
                            <InnerItems title={" #tech karo "} />
                        </Menu>
                    </Sider>
                    <Layout style={{ background: '#fff' }} className="layout" >
                        <Row className="nav">
                            <Col span={8}>
                                <Row><h3 > #attendence</h3></Row>
                                <Row>
                                    <Icon type="star" className="channel_items" className="star" />
                                    <Icon type="user" className="channel_items" /><span className="border">116 </span>
                                    <Icon type="pushpin" className="channel_items" /><span className="border">1 </span>
                                    <Icon type="edit" className="channel_items" /><span> Add a topic</span>
                                </Row>
                            </Col>
                            <Col span={8} offset={8}>
                                <Row align="center" style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }} >
                                    <Icon type="phone" className="head_Item" />
                                    <Icon type="info-circle" className="head_Item" />
                                    <Icon type="setting" className="head_Item" />
                                    <Input
                                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Search"
                                    />
                                    <i className="head_Item" >@</i>
                                    <Icon type="star" className="head_Item star" />
                                </Row>
                            </Col>
                        </Row>
                        <Content style={{ margin: '0', backgroundColor: 'white' }} >
                            <fieldset>
                                <legend></legend>
                            </fieldset>
                            <Chat imgUrl={require('./images/profile.png')} name={"akber ali"} time={"12:27 AM"} comment={"@Tuba Mohsin respectfully it is stated that me Akber ali will not be able to attend the class for today 14 may because I have pain in my throat also having flu ...so kindly please grant me leave for today...thank you !"} />
                            <Chat imgUrl={require('./images/pro.png')} name={"Reena Bano"} time={"1:27 AM"} comment={"was added to #attendance by Noreen naz, along with 17 others."} />
                            <Chat imgUrl={require('./images/2.png')} name={"Altaf Hussain"} time={"8:00 AM"} comment={"Aslam o alaiqum Miss mein hafty tak nahi asktaa meri ami hospital mein admit hen or in k pass koe nai hai mery ilwa Thank u miss "} />
                            <Chat imgUrl={require('./images/5.png')} name={"Beenish sheikh"} time={"4:27 PM"} comment={" Ma'am @Tuba Mohsin Im beenish sheikh.im severe ill,filling giddy and nausea .therefore i can't attend the important class today. plz accept my leave. I shall be very thankful to you."} />
                            <Chat imgUrl={require('./images/6.png')} name={"Talat Hussain"} time={"2:00 AM"} comment={" MA SHA ALLAH.."} />
                            <Chat imgUrl={require('./images/4.png')} name={"Noreen Naz"} time={"7:00 AM"} comment={" Wali...."} />
                        </Content>
                        <Footer style={{ textAlign: 'center', position: "fixed", bottom: "0", width: '100%' }}>
                            <div style={{ marginBottom: 16 }}>
                                <Input addonBefore={<i class="fas fa-plus"></i>} addonAfter={<i class="far fa-smile"></i>} defaultValue="mysite" />
                            </div>
                        </Footer>
                    </Layout>
                </Layout>

            </div>
        );
    }
}

export default Sidebar;
