import React, { Component } from 'react';
import { Menu } from 'antd';
import './Sidebar.css';
export class InnerItems extends Component {
    render() {

        return (
            <>
                <Menu.Item className="channel_item">
                    <p>{this.props.title}</p>
                </Menu.Item>

            </>
        );
    }
}

export default InnerItems;
