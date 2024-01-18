import React, { InputHTMLAttributes, forwardRef } from "react";

type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  style?: React.CSSProperties;
  name: string;
};

export const checkBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ name, style, ...props }, ref) => {
    return (
      <div>
        <input 
          type='checkbox' 
          style={style} 
          ref={ref} 
          name={name} 
          {...props} 
        />
      </div>
    );
  }
);

export default checkBox;
