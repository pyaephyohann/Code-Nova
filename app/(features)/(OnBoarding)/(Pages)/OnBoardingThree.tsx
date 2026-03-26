"use client";

import Image from "next/image";
import LogoTopBar from "../(Components)/LogoTopBar";
import Button from "@/app/components/Button";

const OnBoardingThree = () => {
  return (
    <div>
      <nav className="flex justify-between items-center pr-4">
        <LogoTopBar />
        <span></span>
      </nav>
      {/* body */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold font-arimo">
          <h2>Let’s study together with CodeNova!</h2>
        </h2>
        <p className="mt-8">
          <span className="mr-2 text-codeBlack/60 text-lg font-arimo">
            Let’s earn points every day!
          </span>
          🎉
        </p>
      </div>
      <div className="bg-primary absolute bottom-0 left-0 rounded-tr-full rounded-tl-full">
        <Image
          alt="onboarding image"
          src={"/emoji-educate.png"}
          width={400}
          height={400}
        />
        <div className="flex justify-center items-center">
          <Button
            className="bg-codeWhite! text-primary! w-[90%] rounded-lg! absolute bottom-4 hover:bg-codeWhite/90!"
            callBack={() => {}}
            children="Start"
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoardingThree;
