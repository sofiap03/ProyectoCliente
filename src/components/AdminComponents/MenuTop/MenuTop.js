import React from "react";

import { Button } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PoweroffOutlined,
} from "@ant-design/icons";
import "./MenuTop.scss";

export default function MenuTop(props) {
    const { menuCollapsed, setMenuCollapsed } = props;
    
    return(
        <div className="menu-top">
            <div className="menu-top_left">
                
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </Button>
            </div>
            <div className="menu-top_right">
                <Button type="link" onClick={() => console.log("Log Off!")}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
}

