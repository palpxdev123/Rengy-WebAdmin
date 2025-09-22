import React from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import './style.scss'
import { CalenderIcon } from "../../assets/Images";

interface OptionType {
  label: string;
  value: string | number;
}

interface SelectComponentProps {
  label?: string;
  placeholder?: string;
  className?: string;
  value?: string | number | (string | number)[];
  onChange?: (value: any, option?: any) => void;
  options?: OptionType[];
  disabled?: boolean;
  error?: string;
  touched?: boolean;
  showSearch?: boolean;
  mode?: "multiple" | "tags";
  allowClear?: boolean;
  maxTagCount?: number | "responsive";
  searchValue?: string;
  filterOption?: SelectProps["filterOption"];
  /** custom prop, not passed to antd Select */
  name?: string;
  onClear?: () => void;
  calender?:boolean

}

const SelectComponent: React.FC<SelectComponentProps> = ({
  label,
  placeholder,
  className = "",
  value,
  onChange,
  options = [],
  disabled = false,
  error,
  touched,
  showSearch = false,
  mode,
  allowClear = false,
  maxTagCount = 1,
  searchValue,
  filterOption,
  name, // ✅ only used internally, not passed to <Select>
  calender,
  onClear,

}) => {
  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <Select
        id={name} // ✅ use id instead of name
        suffixIcon={ calender ? <div  className="pl-[8px]"><img src={CalenderIcon} style={{ marginLeft: "8px", width: 16, height: 16 }} /></div> : null}
        mode={mode}
        placeholder={placeholder}
        value={value ?? undefined}
        onChange={onChange}
        disabled={disabled}
        options={options}
        showSearch={showSearch}
        allowClear={allowClear}
        maxTagCount={maxTagCount}
        filterOption={filterOption}
        onClear={onClear}
        searchValue={searchValue}
        // searchValue={searchValue}

        style={{height: 36}}
      />
      {error && touched && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default SelectComponent;
