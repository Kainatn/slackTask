import React from 'react';
import { Col, Row } from 'antd';
import './Chat.css'
const Chat = (props) => {
    return (


        <Row className="chats">
            <Col span={1}>
                <img src={props.imgUrl} alt="profile"></img>
            </Col>
            <Col className="chatArea">
                <h3>{props.name}</h3>
                <span>{props.time}</span>
            </Col>
            <Col span={20}  >
                <p>{props.comment}</p>
            </Col>
        </Row>

    );
}

export default Chat;
