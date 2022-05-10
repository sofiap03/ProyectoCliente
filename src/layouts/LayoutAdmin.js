import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSider from "../components/AdminComponents/MenuSider"
import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const { children } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;

  //Especificas los componentes que quieres obtener de este layout
  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout className="layout-admin">
        <Header className="layout-admin_header">
          <MenuTop>
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
          </MenuTop>
        </Header>
        <Content className="layout-admin_content">
            <h1>Rutas</h1>
        </Content>
        <Footer className="layout-admin_footer">MERN React Project</Footer>
      </Layout>
    </Layout>
  );
}