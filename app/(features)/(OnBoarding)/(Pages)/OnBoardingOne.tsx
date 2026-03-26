"use client";

import Link from "next/link";
import LogoTopBar from "../(Components)/LogoTopBar";
import Image from "next/image";
import ArrowButton from "../(Components)/ArrowButton";

const OnBoardingOne = () => {
  return (
    <div>
      <nav className="flex justify-between items-center pr-4">
        <LogoTopBar />
        <Link className="font-bold text-xl text-primary" href={"/auth/sign-in"}>
          Skip
        </Link>
      </nav>
      {/* body */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold font-arimo">
          <h2>Hello</h2>
          <h2 className="mt-2">Future Developer!</h2>
        </h2>
        <p className="mr-2 text-codeBlack/60 text-lg font-arimo mt-8">
          Welcome to our coding app ✨
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

export default OnBoardingOne;
