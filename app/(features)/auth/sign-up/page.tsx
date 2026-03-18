"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Loading from "@/app/components/Loading";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
  const [signUpDatas, setSignUpDatas] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isDisabled =
    !signUpDatas.name || !signUpDatas.email || !signUpDatas.password;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpDatas({
      ...signUpDatas,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const arePasswordsSamed =
      signUpDatas.password === signUpDatas.confirmPassword;

    if (!arePasswordsSamed) {
      setErrorMessage("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    setErrorMessage(null);

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
      <h2 className="text-center font-semibold text-[1.5rem] text-primary">
        Time to join the cool coding club!
      </h2>
      <form onSubmit={handleSignUp} className="flex flex-col gap-7 mt-[3rem]">
        <Input
          label="Name"
          name="name"
          placeholder="Ikki"
          value={signUpDatas.name}
          onChange={handleChange}
        />
        <Input
          label="Email"
          name="email"
          placeholder="ikki@gmail.com"
          value={signUpDatas.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          name="password"
          placeholder="12345"
          value={signUpDatas.password}
          type="password"
          onChange={handleChange}
        />
        <Input
          label="Confirm Password"
          name="confirmPassword"
          placeholder="12345"
          value={signUpDatas.confirmPassword}
          type="password"
          onChange={handleChange}
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <Button disabled={isDisabled || isLoading} callBack={handleSignUp}>
          {isLoading ? <Loading /> : "Create"}
        </Button>
      </form>
      <div className="mt-6 text-[0.9rem] text-codeBlack/70">
        Already have an account?{" "}
        <Link className="text-primary" href={"/auth/sign-in"}>
          Log In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
