import React from "react";

interface ButtonComponentProps {
  type?: "primary" | "secondary";
  label?: React.ReactNode;
  block?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Buttoncomponent = ({
  type = "primary",
  label,
  onClick,
  disabled,
  block,
  children,
  className,
  style,
  ...rest
}: ButtonComponentProps) => {
  const commonClass =
    "hfour px-[20px] py-[10px] rounded-[4px]  h-[40px] flex justify-center items-center";

  const typeClass =
    type === "secondary"
      ? "button-text-secondary border-main-primary"
      : "button-text bg-main-primary border-none";

  return (
    <button
      style={style}
      onClick={onClick}
      disabled={disabled}
      className={`${commonClass} ${typeClass} ${disabled ? "disabled" : ""} ${
        block ? "block" : ""
      } ${className || ""} cursor-pointer`}
      {...rest}
    >
      {children || label}
    </button>
  );
};

export default Buttoncomponent;
