import { ConfigProvider, Select } from "antd";
import type { SelectProps } from "antd";
import "./style.scss";
import { CalenderIcon } from "../../assets/Images";
import "../../Components/Typo/style.scss";
import "../../styles/_utilities.scss";
import { GoChevronDown } from "react-icons/go";

interface OptionType {
  label?: string;
  value: string | number;
}
interface SelectComponentProps {
  label?: string;
  placeholder?: string;
  className?: string;
  value?: string | number | null;
  onChange: (name: string, value?: any) => void;
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
  name: string;
  onClear?: () => void;
  calender?: boolean;
  mandatory?: boolean;
  selectClass?: string;
  height?: string;
  size?:string
}

const SelectComponent = ({
  size,
  name,
  label,
  placeholder = "Select",
  className = "",
  value,
  onChange,
  options = [],
  disabled = false,
  error,
  showSearch = false,
  mode,
  allowClear = false,
  maxTagCount = 1,
  searchValue,
  filterOption,
  calender,
  onClear,
  mandatory,
  selectClass,
  height,
}: SelectComponentProps) => {
  return (
    <div className="flex flex-col">
      {label && <div className="mb-[6px] text-two text-secondary">
        {label}
        {mandatory && <span className="decrease-color">*</span>}
      </div>}
      <ConfigProvider 
      theme={{
        token:{
          fontSize: size === "small" ? 14 : 16,
          colorText: size === "small" ? "select-text" : "text-secondary"
        }
      }}
      >
        <Select
        suffixIcon={
          calender ? (
            <div className={`${size === "small" ? "selectsmallArrow" : "selectArrow"} flex justify-center items-center`} >
              <img
                src={CalenderIcon}
                style={{ marginLeft: "8px", width: 16, height: 16 }}
              />
            </div>
          ) : (
            <div className={`${size === "small" ? "selectsmallArrow" : "selectArrow"} flex justify-center items-center ml-[8px]`}>
              <GoChevronDown className="h-[20px] w-[20px] view-text" />
            </div>
          )

        }
        prefix={false}
        mode={mode}
        placeholder={placeholder}
        value={value ?? undefined}
        onChange={(value) => onChange(name, value)}
        disabled={disabled}
        options={options}
        showSearch={showSearch}
        allowClear={allowClear}
        maxTagCount={maxTagCount}
        filterOption={filterOption}
        onClear={onClear}
        searchValue={searchValue}
        className={`${selectClass} ${size === "small" && "!h-[36px] !rounded-[4px]"} rengy rounded-[8px] border indent-[12px] ${
          error ? "error-input-border" : "input-border"
        }  text-six outline-0 text-secondary`}
        style={{
          height: height || "48px",
        }}
      />
      </ConfigProvider>
      <div className="decrease-color">{error && error}</div>
    </div>
  );
};

export default SelectComponent;
