import Image from "next/image";

const SplashScreen = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-codeWhite">
      <Image alt="Logo" src="/logo.png" width={300} height={300} />
    </div>
  );
};

export default SplashScreen;
