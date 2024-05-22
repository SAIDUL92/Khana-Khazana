import Image from "next/image";
import Link from "next/link";
import SignInOut from "../Auth/SignInOut";
export default function Header() {
  return (
    <>
      <nav>
        <div className="container flex justify-between py-6">
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              className="object-cover h-[40px]"
              width={122}
              height={40}
            />
          </Link>
          <ul className="flex gap-4 text-sm text-gray-500">
            <li className="py-2 active">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2">
              <Link href="/">Recipe</Link>
            </li>
            <li className="py-2">
              <Link href="/">About us</Link>
            </li>
            <SignInOut />
          </ul>
        </div>
      </nav>
    </>
  );
}
