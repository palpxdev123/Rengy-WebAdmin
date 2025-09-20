import React from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";

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
  onClear,
}) => {
  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <Select
        id={name} // ✅ use id instead of name
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
      />
      {error && touched && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default SelectComponent;
