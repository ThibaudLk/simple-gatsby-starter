/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

// import "./layout.css"

import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, HeartTwoTone } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const LayoutPerso = ({ children, page }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[page]}>
        <Menu.Item key="1">
          <Link to="/">
            <HomeOutlined />
            <span className="nav-text">Accueil</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">
            {<UserOutlined />}
            <span className="nav-text">À propos</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
        <h1 style={{ color: "white"}}>{data.site.siteMetadata.title}</h1>
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, backgroundColor: "white", minHeight: 360 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Un Blog de type classique dirons-nous.<br/>
        Made with <HeartTwoTone twoToneColor="#eb2f96" /> by {data.site.siteMetadata.author}.
      </Footer>
    </Layout>
  </Layout>
  )
}

LayoutPerso.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutPerso
