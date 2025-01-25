import React, { Suspense } from "react";
import Search, { SearchSkeleton } from "./layout/navbar/search";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";

export default function AddressBar() {
  return (
    <div className="flex justify-between items-center px-2 p-2 lg:px-4">
      <div className="flex items-center gap-x-2 p-3.5 lg:px-5 lg:py-3 ">
        <div className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex gap-x-1 text-sm font-medium">
          <div>
            <span className="px-2 text-gray-400">blogi.com</span>
          </div>
        </div>
      </div>
      <div className="hidden justify-center md:flex md:w-1/3">
        <Suspense fallback={<SearchSkeleton />}>
          <Search />
        </Suspense>
      </div>
      <div>
        <Link
          href="/login"
          className="rounded-md px-3 py-2 text-sm lg:text-base font-medium hover:text-gray-300 flex items-center space-x-2 text-gray-400 hover:bg-gray-800"
        >
          <span>
            <CiLogin className="size-4" />
          </span>
          <span> LogIn</span>
        </Link>
      </div>
    </div>
  );
}
