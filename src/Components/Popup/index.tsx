import React from "react";
import { Modal } from "antd";
import "./style.scss";
import Buttoncomponent from "../Button";



interface PopupProps {
  open: boolean;
  title?: string;
  children?: React.ReactNode;
  className?:any;
  width?:number | string;
  Footer?:any;
  setOpen: (value:boolean)=>void
  footerLeftButtonlabel?: string,
  footerRightButtonlabel?:string
  footerLeftButtonOnclick?: () => void,
  footerRightButtonOnclick?:() => void
}

const Popup = ({ open, title,  children, className, width, Footer, setOpen, footerLeftButtonlabel, footerRightButtonlabel, footerLeftButtonOnclick, footerRightButtonOnclick}: PopupProps) => {
  return (
    <Modal

      footer={Footer ? <div className="flex justify-end gap-[16px]">
        <Buttoncomponent type="secondary" label={footerLeftButtonlabel} onClick={()=> footerLeftButtonlabel === "Cancel" ? setOpen(false) : footerLeftButtonOnclick} />
        <Buttoncomponent type="primary" label={footerRightButtonlabel} onClick={footerRightButtonOnclick} />

      </div> : false}
      title={title}
      open={open}
      onCancel={()=>setOpen(false)}
      closable
      className={`${className} rengy-popup`}
      width={width || "max-content"}
    >
      {children}
    </Modal>
    
  );
};

export default Popup;
