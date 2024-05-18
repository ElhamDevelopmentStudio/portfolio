// pages/404.tsx
import React from "react";
import Link from "next/link";

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-2xl text-gray-600">Page Not Found</p>
      <p className="mt-2 text-lg text-gray-500">
        Sorry, Elhamullah Hossaini couldn&apos;t find the page you were looking
        for.
      </p>
      <Link href="/">
        <a className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition">
          Go Back Home
        </a>
      </Link>
    </div>
  );
};

export default Custom404;
