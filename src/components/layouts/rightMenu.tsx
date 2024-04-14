import { useRouter } from "next/router";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { AiTwotoneSetting } from "react-icons/ai";
import AuthHook from "@/hooks/useAuth";

const RightMenu = () => {
  const route = useRouter();
  const { setTokenAuth, setUser } = AuthHook();

  const doLogout = () => {
    setUser("");
    setTokenAuth("");
    route.push("/login");
  };

  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content relative">
            <label htmlFor="my-drawer-4">
              <li
                className={`rounded-md ${
                  route.pathname === "/settings" && "bg-gray-700"
                }`}
              >
                <div onClick={() => route.push("/settings")} className="w-full">
                  <AiTwotoneSetting size={18} />
                  <p>Settings and Profile</p>
                </div>
              </li>
            </label>
            <label htmlFor="my-drawer-4" className="absolute bottom-5 w-72">
              <li>
                <div onClick={doLogout} className="w-full">
                  <BiLogOut size={18} />
                  <p>Logout</p>
                </div>
              </li>
            </label>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RightMenu;
