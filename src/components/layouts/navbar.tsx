import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const route = useRouter();

  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1">
          <a
            onClick={() => route.push("/")}
            className="btn btn-ghost normal-case text-xl"
          >
            Linkz Asia Asignment
          </a>
        </div>
        <div className="flex-none">
          <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
