"use client";
import { useState } from "react";
import Link from "next/link";
import { performLogin } from "@/app/actions";

import { useRouter } from "next/navigation";
import { useAuth } from "@/app/hooks";

export default function LogIn() {
  const [error, setError] = useState("");
  const { setAuth, fevPath } = useAuth();
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const found = await performLogin(formData);

      if (found) {
        setAuth(found);
        router.push(fevPath ? fevPath : "/");
      } else {
        setError("Please provide a valid credential!");
      }
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
      <h4 className="font-bold text-2xl">Sign in</h4>
      <div className="my-2 text-red-500">{error}</div>
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button
          type="submit"
          className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
        >
          Login
        </button>
      </form>
      <p className="text-center text-xs text-gray-600">Or</p>
      <Link
        href="/register"
        className="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
      >
        Create New Account
      </Link>
    </div>
  );
}
