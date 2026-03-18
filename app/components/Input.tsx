// import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface Props {
  type?: string;
  placeholder: string;
  label?: string;
  name: string;
  value?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({
  type = "text",
  placeholder,
  label,
  name,
  value,
  onChange,
  className,
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor="name">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`px-6 hover:bg-transparent rounded-xl h-15 outline-none hover:border-primary hover:border-2 caret-primary bg-codeBlack/8 ${className}`}
      />
    </div>
  );
};

export default Input;
