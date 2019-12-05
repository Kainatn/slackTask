import React from 'react';
import './Sidebar.css';
import { Menu } from 'antd';
const Items = () => {
    return (
        <div>
            <Menu.Item>
                <i class="fas fa-bars"></i>
                <span className="tk">
                    All Unreads
                                </span>
            </Menu.Item>
            <Menu.Item >
                <i class="fas fa-comments icons"></i>
                <span>
                    threads
             </span>
            </Menu.Item>
            <Menu.Item className="channel">
                <span >
                    Channels
             </span>
            </Menu.Item>

        </div>
    );
}

export default Items;
