import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

interface TextareaProps {
row?:any;
placeholder:string;
maxLength?:any;
className:any;
}
const Textarea: React.FC<TextareaProps> = ({row, placeholder, maxLength, className}) => {
  return <TextArea rows={row} placeholder={placeholder} maxLength={maxLength} className={className}/>;
};

export default Textarea;
