import React from "react";
import styles from './index.less';
import { Layout, Menu } from 'antd';

const {Header, Content, Footer} = Layout;

function BasicLayout(props: any) {
  return (
      <Layout>
          <Header>
            <div className={styles.logo}>umi learning</div>
            <Menu 
                theme="dark" mode="horizontal" 
                defaultSelectedKeys={['1']}
                style={{lineHeight: '64px'}}
            >
                <Menu.Item key="1">英雄</Menu.Item>
                <Menu.Item key="2">局内道具</Menu.Item>
                <Menu.Item key="3">召唤师技能</Menu.Item>
            </Menu>
          </Header>
          <Content style={{padding: '0 50px'}}>
            {props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
              umi demo
          </Footer>
      </Layout>
  );
}

export default BasicLayout;