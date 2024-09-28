import React from "react";
import "./button.scss";

const Button: React.FC<{
  text: string;
  Icon?: React.ElementType;
  outlined?: boolean;
  onClick: () => void;
}> = ({ text, Icon, onClick, outlined }) => {
  return (
    <button className={`button ${outlined && "outlined"}`} onClick={onClick}>
      {Icon && <Icon width={20} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
