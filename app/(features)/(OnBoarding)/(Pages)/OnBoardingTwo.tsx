"use client";

import Image from "next/image";
import LogoTopBar from "../(Components)/LogoTopBar";
import ArrowButton from "../(Components)/ArrowButton";

const OnBoardingTwo = () => {
  return (
    <div>
      <nav className="flex justify-between items-center pr-4">
        <LogoTopBar />
        <span></span>
      </nav>
      {/* body */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold font-arimo">
          <h2>Do you actually study at home?</h2>
        </h2>
        <p className="mt-8">
          <span className="mr-2 text-codeBlack/60 text-lg font-arimo">
            or just open the app and vibe?
          </span>
          🤨
        </p>
      </div>
      <div className="bg-primary absolute bottom-0 left-0 rounded-tr-full rounded-tl-full">
        <Image
          className=""
          alt="onboarding image"
          src={"/emoji-educate.png"}
          width={400}
          height={400}
        />
        <div className="absolute right-6 bottom-4">
          <ArrowButton onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default OnBoardingTwo;
