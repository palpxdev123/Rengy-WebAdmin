import { CiSearch } from "react-icons/ci";
import "../../Components/Typo/style.scss";
import "../../styles/_utilities.scss";

interface props {
  name?: string;
  value?: string;
  onChange?: () => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  label?: string;
  error?: string;
  mandatory?: boolean;
  inputClass?: string;
  size?: string;
  height?: string;
  search?: boolean
}

const Input = ({
  name,
  value,
  onChange,
  placeholder = "Enter",
  type = "text",
  disabled = false,
  label,
  error,
  mandatory = false,
  inputClass,
  size,
  height,
  search
}: props) => {
  return (
    <div className="flex flex-col">
      {label && (
        <div className="mb-[6px] text-two text-secondary">
          {label}
          {mandatory && <span className="decrease-color">*</span>}
        </div>
      )}
      <div className="relative flex items-center">
        {search && <CiSearch size={20} className="absolute flex items-center ml-[12px] search-icon" />}
        <input
          className={`${inputClass} ${
            size === "small" && "!h-[36px] !rounded-[4px]"
          } rounded-[8px] border ${search ? "indent-[40px]" : "indent-[12px]"} ${
            error ? "error-input-border" : "input-border"
          }  text-six outline-0 text-secondary`}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          style={{
            height: height || "48px",
          }}
        />
      </div>
      <div className="decrease-color">{error && error}</div>
    </div>
  );
};

export default Input;
