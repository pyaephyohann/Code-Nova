import Image from "next/image";

const LogoTopBar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Image alt="logo" src={"/logo.png"} width={100} height={100} />
      <span></span>
    </nav>
  );
};

export default LogoTopBar;
