import { MdOutlineArrowForwardIos } from "react-icons/md";

interface Props {
  direction?: string;
  onClick: () => void;
}

const ArrowButton = ({ direction = "right", onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer p-4 bg-codeWhite rounded-full"
    >
      <MdOutlineArrowForwardIos
        className={`text-primary text-[1.6rem] ${direction === "right" ? "" : "rotate-180"}`}
      />
    </button>
  );
};

export default ArrowButton;
