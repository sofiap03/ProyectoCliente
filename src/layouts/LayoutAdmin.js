import React from "react";
import { Layout } from "antd";

export default function LayoutAdmin(props){
    const { children } = props;
    return (
        <Layout>
            <h2>Menú</h2> 
            <div>Contenido</div>
            <h5>Footer</h5>
            {children}
        </Layout>
    )
}