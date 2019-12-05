import React from 'react';
import { Menu, Icon } from 'antd';
import './Sidebar.css';
const DirectChats = (props) => {
    return (
        <div>
            <Menu.Item className="channel_item">
                <Icon type={props.icon} className="directChatIcon" theme={props.theme} />  <span>{props.title}</span>
            </Menu.Item>
        </div>
    );
}

export default DirectChats;
