import React from "react";
import { Modal } from "antd";

function CustomeModal({
  title,
  handleOk,
  isModalVisible,
  handleCancel,
  children,
}) {
  return (
    <Modal
      title={title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      {children}
    </Modal>
  );
}
export { CustomeModal };
