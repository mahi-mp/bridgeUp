import React from "react";
import { Navbar } from "./Navbar";
import { Layout } from "antd";

const { Content } = Layout;

/**
 * @function PrivateRoute
 * @param {Object} Object parent object paraments
 * @returns {Object} JSX.Element
 * Higher order function that validates the auth token before proceeding
 */

export const PrivateRoute = ({ children }) => {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Layout>
          <Navbar />
          <Content
            style={{
              overflow: "auto",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
