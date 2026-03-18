"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Loading from "@/app/components/Loading";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignIn = () => {
  const [signInDatas, setSignInDatas] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const isDisabled = !signInDatas.email || !signInDatas.password;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInDatas({
      ...signInDatas,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div>
      <Image
        className="rounded-full mx-auto"
        alt="Logo"
        src="/logo.png"
        width={200}
        height={200}
      />
      {/* <h2>Time to join the cool coding club!</h2> */}
      <h2 className="text-center font-semibold text-[1.6rem] text-primary">
        Knock Knock! Time to Log In!
      </h2>
      <form onSubmit={handleSignIn} className="flex flex-col gap-7 mt-[3rem]">
        <Input
          label="Email"
          name="email"
          placeholder="ikki@gmail.com"
          value={signInDatas.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          name="password"
          placeholder="12345"
          value={signInDatas.password}
          onChange={handleChange}
        />
        <Button disabled={isDisabled || isLoading} callBack={handleSignIn}>
          {isLoading ? <Loading /> : "Create"}
        </Button>
      </form>
      <div className="mt-6 text-[0.9rem] text-codeBlack/70">
        Don't have an account?{" "}
        <Link className="text-primary" href={"/auth/sign-up"}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
