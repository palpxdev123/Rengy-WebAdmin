import React from "react";
import { CiSearch } from "react-icons/ci";
import "../../styles/_utilities.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  search?: boolean; // show search icon
  placeholderSymbol?: boolean; // show currency icon
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  touched,
  disabled = false,
  className = "",
  search,
  placeholderSymbol,
  max,
  ...props
}) => {
  return (
    <div
      className={` 
            ${placeholderSymbol ? "h-[75px]" : ""} 

          `}
    >
      {label && (
        <label htmlFor={name} className="small-text ">
          {label}
        </label>
      )}

      <div className="input-container relative">
        {search && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 ">
            <CiSearch size={20} className="search-icon" />
          </span>
        )}

        {placeholderSymbol && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2"></span>
        )}

        <input
          type={type}
          max={max}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`input-border rounded-[4px] w-[526px]
            ${error && touched ? "error" : ""} 
            ${search ? "py-[6px] pr-[171px]  pl-[12px] indent-[30px]" : ""} 
            ${placeholderSymbol ? "py-[13px]  pl-[12px] rounded-[8px]" : ""} 
            ${className}
          `}
          {...props}
        />
      </div>

      {error && touched && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;
