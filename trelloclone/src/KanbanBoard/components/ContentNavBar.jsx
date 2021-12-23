import React, { useState } from "react";
import {
  AutoComplete,
  Avatar,
  Divider,
  Space,
  Button,
  Col,
  Typography,
  Layout,
  Row,
} from "antd";
import {
  GlobalOutlined,
  FilterOutlined,
  DashOutlined,
} from "@ant-design/icons";

import { CustomeModal } from "../../Common/components/CustomeModal";
import { CreateTask } from "./CreateTask";
import { useDispatch } from "react-redux";
import { boardAction } from "../state/actions";
import { CustomeDrawer } from "../../Common/components/CustomeDrawer";
import { SideDrawerComponent } from "./SideDrawerComponent";
import styles from "../styles/Kanban.module.css";

const { Header } = Layout;
const { Title } = Typography;

/**
 * @function ContentNavBar
 * @returns {Object} JSX.element
 * child Navbar component for itscontent
 */

function ContentNavBar() {
  const dispatch = useDispatch();

  const [isModalVisible, setModalVisibility] = useState(false);

  let modalHandleOk = (e, data) => {
    setModalVisibility(false);
  };

  let handleCancel = (e) => {
    setModalVisibility(false);
  };

  // submit Event handle for creating new task
  let onFinish = (data) => {
    dispatch(boardAction.addTask(data));
    setModalVisibility(false);
  };

  let options = JSON.parse(localStorage.getItem("trelloData")); //stored local data

  const [visibledrawer, setvisibledrawer] = useState(false);
  let handleDrawer = () => {
    setvisibledrawer(true);
  };

  let onCloseDrawer = () => {
    setvisibledrawer(false);
  };

  return (
    <Header className={styles.contentNavBarAlignment}>
      <div style={{ fontSize: "14px", fontWeight: "700" }}>
        {/* universel custome model  */}
        <CustomeModal
          title="Create Task"
          handleOk={modalHandleOk}
          isModalVisible={isModalVisible}
          handleCancel={handleCancel}
        >
          <CreateTask onFinish={onFinish} />
        </CustomeModal>

        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Space direction="horizontal">
              <Title
                style={{
                  margin: "0.2em 0.5em",
                  color: "#ffffff",
                  fontWeight: "600",
                  lineHeight: "1.35",
                }}
                level={4}
              >
                Kanban Board
              </Title>
              <Divider type="vertical" className={styles.deviderClass} />
              <Button
                type="primary"
                className={styles.publicButton}
                icon={<GlobalOutlined />}
              >
                Public
              </Button>
              <Divider type="vertical" className={styles.deviderClass} />
              <Avatar className={styles.userIconAlignment} size="small">
                {"AH"}
              </Avatar>
              <img
                className={styles.userLogoIcon}
                src={
                  "https://a.trellocdn.com/prgb/dist/images/chevron.88a4454280d68a816b89.png"
                }
                alt="Users"
              />
              <Divider type="vertical" className={styles.deviderClass} />
              <Button
                type="primary"
                onClick={() => setModalVisibility(!isModalVisible)}
                className={styles.publicButton + " " + styles.toggleMobile}
              >
                Create
              </Button>
            </Space>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            className={styles.mobileContentNavbar}
          >
            <Space direction="horizontal">
              <Divider type="vertical" className={styles.deviderClass} />
              {/* Autocomplete functionality */}
              <AutoComplete
                style={{
                  width: 150,
                }}
                className={styles.toggleMobile}
                options={options}
                placeholder="Search"
                filterOption={(inputValue, option) =>
                  option.label
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
              />
              <Button
                type="primary"
                className={styles.publicButton}
                icon={<FilterOutlined />}
              >
                Filter
              </Button>
              <Button
                type="primary"
                className={styles.publicButton}
                onClick={handleDrawer}
                icon={<DashOutlined />}
              >
                Show menu
              </Button>

              {/* universel custome Drawer */}
              <CustomeDrawer
                title="Menu"
                visible={visibledrawer}
                onClose={onCloseDrawer}
              >
                <SideDrawerComponent />
              </CustomeDrawer>
            </Space>
          </Col>
        </Row>
      </div>
    </Header>
  );
}
export { ContentNavBar };
