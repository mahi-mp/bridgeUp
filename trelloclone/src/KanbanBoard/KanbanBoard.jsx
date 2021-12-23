import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, Layout } from "antd";
import { boardAction } from "./state/actions";
import styles from "./styles/Kanban.module.css";
import { ContentNavBar } from "./components/ContentNavBar";
import { Listing } from "./components/Listing";
import { EachListingCard } from "./components/EachListingCard";
const { Header, Content } = Layout;

function KanbanBoard() {
  const dispatch = useDispatch();
  const { boardData } = useSelector((state) => state.kanban);

  let drop = (event, listing) => {
    let transferId = event.dataTransfer.getData("TransferId");
    dispatch(boardAction.dropEventData(listing, transferId));
  };
  let allowDrop = (e) => {
    e.preventDefault();
  };
  return (
    <Layout
      style={{ height: "100%", padding: "0px", backgroundColor: "#2779bf" }}
    >
      <Header className={styles.tempNavbarHeader}>
        <div className={styles.tempNavbar}>
          <div className={styles.tempNavbarTitle}>
            Visually collaborate with anyone, anywhere.
          </div>
          <Button type="primary" className={styles.signupButton}>
            Sign up for free
          </Button>
        </div>
      </Header>
      <Row>
        <Col span={24}>
          <ContentNavBar />
        </Col>
      </Row>
      <Content
        style={{
          overflow: "auto",
        }}
      >
        <Row gutter={[6, 6]} style={{ padding: "0 1em", flexFlow: "row" }}>
          <Col
            onDragOver={(event) => allowDrop(event)}
            onDrop={(event) => drop(event, "todo")}
            style={{ width: "272px" }}
          >
            <Listing title="To Do">
              {boardData.map((ele, index) => {
                if (ele.listingType === "todo") {
                  return <EachListingCard key={index} data={ele} />;
                }
              })}
            </Listing>
          </Col>
          <Col
            onDragOver={(event) => allowDrop(event)}
            onDrop={(event) => drop(event, "development")}
            style={{ width: "272px" }}
          >
            <Listing title="Development">
              {boardData.map((ele, index) => {
                if (ele.listingType === "development") {
                  return <EachListingCard key={index} data={ele} />;
                }
              })}
            </Listing>
          </Col>
          <Col
            onDragOver={(event) => allowDrop(event)}
            onDrop={(event) => drop(event, "test")}
            style={{ width: "272px" }}
          >
            <Listing title="Testing">
              {boardData.map((ele, index) => {
                if (ele.listingType === "test") {
                  return <EachListingCard key={index} data={ele} />;
                }
              })}
            </Listing>
          </Col>
          <Col
            onDragOver={(event) => allowDrop(event)}
            onDrop={(event) => drop(event, "done")}
            style={{ width: "272px" }}
          >
            <Listing title="Done">
              {boardData.map((ele, index) => {
                if (ele.listingType === "done") {
                  return <EachListingCard key={index} data={ele} />;
                }
              })}
            </Listing>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export { KanbanBoard };
