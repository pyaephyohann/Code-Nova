"use client";

import { useRouter } from "next/navigation";
import LogoTopBar from "../(OnBoarding)/(Components)/LogoTopBar";
import Image from "next/image";
import Button from "@/app/components/Button";

const Auth = () => {
  const router = useRouter();

  return (
    <div>
      <nav className="flex justify-between items-center pr-4">
        <LogoTopBar />
        <span></span>
      </nav>

      <Image
        className="my-6"
        alt="learn"
        src={"/emoji-kiss.png"}
        width={300}
        height={300}
      />

      <div className=" mb-12">
        <h2 className="text-3xl">Let’s start learning! 🚀</h2>
        <p className="mr-2 text-codeBlack/60 text-md font-arimo mt-8">
          Every small step you take today brings you closer to your goals—let’s
          begin together! ✨
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-5 absolute bottom-8 w-[90%]">
          <Button
            className="border border-secondary bg-secondary/10! text-secondary!"
            callBack={() => router.push("/auth/sign-up")}
            children="Register"
          />
          <Button
            callBack={() => router.push("/auth/sign-in")}
            children="Log In"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
