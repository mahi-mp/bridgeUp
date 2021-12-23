import React from "react";
import { Button, Layout, Row, Col, Space } from "antd";
import styles from "../styles/Navbar.module.css";
const { Header } = Layout;

/**
 * @function Navbar
 * @returns {Object} JSX.element
 * Navbar component which is rendered for all protected routes
 */

function Navbar() {
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: "0 0.5rem",
        maxHeight: "40px",
        lineHeight: "40px",
        background: "#2067a4",
      }}
    >
      <Row>
        <Col xs={0} sm={0} md={4} lg={4} xl={4}>
          <Space direction="horizontal">
            <Button className={styles.menuButton} type="primary">
              Home
            </Button>
            <Button className={styles.menuButton}>Tour</Button>
            <Button className={styles.menuButton}>Blog</Button>
          </Space>
        </Col>
        <Col xs={6} sm={6} md={14} lg={16} xl={16}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "center",
            }}
          >
            <img
              src={
                "https://a.trellocdn.com/prgb/dist/images/header-logo-spirit.d947df93bc055849898e.gif"
              }
              className={styles.logo}
              alt="test"
            />
          </div>
        </Col>
        <Col xs={18} sm={18} md={6} lg={4} xl={4} style={{ textAlign: "end" }}>
          <Button
            type="primary"
            className={styles.signInButton + " " + styles.customeButton}
            size={32}
          >
            Sign up
          </Button>
          <Button
            type="primary"
            className={styles.logInButton + " " + styles.customeButton}
            size={32}
          >
            Log in
          </Button>
        </Col>
      </Row>
    </Header>
  );
}
export { Navbar };
