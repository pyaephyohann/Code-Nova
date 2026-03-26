import { ReactNode } from "react";

interface Props {
  callBack: (value: any) => void;
  className?: string;
  disabled?: boolean;
  children: string | ReactNode;
}

const Button = ({ children, disabled, callBack, className }: Props) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={callBack}
      className={`${className ?? ""} p-2 h-13 rounded-xl text-codeWhite text-[1.2rem] cursor-pointer bg-primary hover:bg-primary/85 disabled:bg-primary/50 disabled:cursor-no-drop`}
    >
      {children}
    </button>
  );
};

export default Button;
