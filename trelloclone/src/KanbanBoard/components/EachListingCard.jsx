import React from "react";
import { Progress, Space, Button, Typography } from "antd";
import styles from "../styles/Kanban.module.css";
import {
  LikeOutlined,
  MessageOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
const { Text } = Typography;

function EachListingCard({ data }) {
  let drag = (event, item) => {
    event.dataTransfer.setData("TransferId", item.id);
  };
  return (
    <Space
      draggable="true"
      onDragStart={(event) => drag(event, data)}
      direction="vertical"
      className={styles.innerCardAlignment}
    >
      <Progress
        trailColor="#fff"
        strokeColor={data.title === "cp" ? "#0079bf" : "#eb5a46"}
        percent={data.percent}
        showInfo={false}
        status="active"
      />
      <Text>{data.label}</Text>
      <Space direction="horizontal">
        {data.count["like"] > 0 && (
          <Button
            className={styles.socialMediaButtonAlignment}
            type="text"
            size="small"
            icon={<LikeOutlined />}
          >
            {data.count["like"]}
          </Button>
        )}
        {data.count["comment"] > 0 && (
          <Button
            type="text"
            className={styles.socialMediaButtonAlignment}
            size="small"
            icon={<MessageOutlined />}
          >
            {data.count["comment"]}
          </Button>
        )}
        {data.count["tasks"].total > 0 && (
          <Button
            type="text"
            className={styles.socialMediaButtonAlignment}
            size="small"
            icon={<CheckSquareOutlined />}
          >
            {`${data.count["tasks"].completed}/${data.count["tasks"].total}`}
          </Button>
        )}
      </Space>
    </Space>
  );
}
export { EachListingCard };
