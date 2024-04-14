import Head from "next/head";
import Profile from "@/components/forms/profile";
import ChangePassword from "@/components/forms/password";

const Settings = () => {
  return (
    <>
      <Head>
        <title>Linkz Asia - Profile</title>
      </Head>
      <div className="p-4">
        <div className="navbar bg-base-100 rounded-md">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">
              Settings and Profile
            </a>
          </div>
        </div>
        <Profile />
        <ChangePassword />
      </div>
    </>
  );
};

export default Settings;
