import Image from "next/image";

const SplashScreen = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-primary">
      <Image
        alt="Programming"
        src="/programming.svg"
        width={300}
        height={300}
      />
      <h2 className="text-codeWhite font-bold font-caveat text-[2.3rem] mt-4">
        Code Nova
      </h2>
    </div>
  );
};

export default SplashScreen;
