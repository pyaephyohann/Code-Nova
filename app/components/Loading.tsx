import { CSSProperties } from "react";
import { PulseLoader } from "react-spinners";

interface Props {
  size?: number;
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loading = ({ size = 15 }: Props) => {
  return (
    <div className="sweet-loading">
      <PulseLoader
        color="white"
        size={size}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
