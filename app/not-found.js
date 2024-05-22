import Link from "next/link";

export default function NotFound() {
  return (
    <div className="dark:bg-body  font-[Sora]  text-dark flex items-center justify-center h-screen">
      <div className="max-w-sm p-8  shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-dark ">
          404 - Page Not Found
        </h1>

        <p className="text-lg text-gray-700">
          Please check the URL or go back to the{" "}
          <Link href="/" className="text-blue-500 hover:underline">
            Home page
          </Link>
        </p>
      </div>
    </div>
  );
}
