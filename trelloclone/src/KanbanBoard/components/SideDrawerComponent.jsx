import React from "react";
import { List, Avatar, Divider } from "antd";
import dayjs from "dayjs";
import {
  AntDesignOutlined,
  UnorderedListOutlined,
  DashOutlined,
} from "@ant-design/icons";
import { ListItem } from "./ListItem";

function SideDrawerComponent() {
  let data = JSON.parse(localStorage.getItem("trelloData"));
  return (
    <>
      <ListItem text="About this board" icon={<AntDesignOutlined />} />
      <ListItem text="More" icon={<DashOutlined />} />
      <Divider />
      <ListItem text="Activity" icon={<UnorderedListOutlined />} />
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar>
                  {" "}
                  <span
                    style={{
                      fontWeight: "700",
                      color: " #172b4d",
                      fontSize: "12px",
                    }}
                  >
                    AH
                  </span>
                </Avatar>
              }
              title={
                <div>
                  <span style={{ fontWeight: "700", color: " #172b4d" }}>
                    {"Andrew Hyde"}
                  </span>
                  {` added ${item.label} to Done.`}
                </div>
              }
              description={`${dayjs().format(
                "DD MMM YYYY"
              )} at ${dayjs().format("HH : MM")} `}
            />
          </List.Item>
        )}
      />
    </>
  );
}
export { SideDrawerComponent };
