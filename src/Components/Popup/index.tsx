import React from "react";
import { Modal } from "antd";
import "./style.scss";
import { Footer } from "antd/es/layout/layout";


interface PopupProps {
  open: boolean;
  title?: string;
  onOk: () => void;
  onCancel: () => void;
  children?: React.ReactNode;
  className?:any;
  width?:number | string;
  Footer?:any;
  
}

const Popup: React.FC<PopupProps> = ({ open, title, onOk, onCancel, children, className, width, Footer }) => {
  return (
    <Modal

      footer={Footer}
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      closable
      className={`${className} rengy-popup`}
      width={width}
    >
      {children}
    </Modal>
    
  );
};

export default Popup;
