"use client";
import { useAuth } from "@/app/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInOut = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const logout = () => {
    setAuth(null);
    router.push("/login");
  };

  return (
    <>
      {auth ? (
        <>
          <li className="py-2">
            <span className="mx-2">Hello, {auth?.fname}</span>
            <span className="mx-1">|</span>
          </li>
          <li className="py-2 bg-[#00f51b] px-6 rounded-md text-white content-center cursor-pointer">
            <Link href="#" onClick={logout}>
              Logout
            </Link>
          </li>
        </>
      ) : (
        <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
          <Link href="/login">Login</Link>
        </li>
      )}
    </>
  );
};

export default SignInOut;
