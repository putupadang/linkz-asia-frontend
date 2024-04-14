import { useRouter } from "next/router";
import React from "react";
import { BiSolidHome } from "react-icons/bi";

type LeftMenuProps = {
  children: React.ReactNode;
};

const LeftMenu = ({ children }: LeftMenuProps) => {
  const route = useRouter();
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{children}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
            <label htmlFor="my-drawer-2">
              <li
                className={`rounded-md ${
                  route.pathname === "/" && "bg-gray-700"
                }`}
              >
                <div onClick={() => route.push("/")} className="w-full">
                  <BiSolidHome size={18} />
                  <p>Home</p>
                </div>
              </li>
            </label>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
