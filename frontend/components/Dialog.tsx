/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-23 11:39:01
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-24 14:36:56
 * @Description:
 */
import { Modal } from "antd";
import { useState, useEffect, Component, ReactNode } from "react";
import "@/assets/css/dialog.css";

interface DialogType {
  showDialog: boolean;
  title: string;
  toggleDialog: (flag: boolean) => void;
  children: ReactNode;
}

export default function Dialog(props: DialogType) {
  const { showDialog, title, toggleDialog } = props;
  useEffect(() => {
    console.log("我打开/关闭了dialog");
  }, [showDialog]);
  return (
    <Modal
      title={title}
      open={showDialog}
      onCancel={() => toggleDialog(false)}
      footer={null}
    >
      {props.children}
    </Modal>
  );
}
