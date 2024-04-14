import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChangePassword = () => {
    if (password.newPassword !== password.confirmNewPassword) {
      toast.error("New password and confirm password does not match");
      return;
    }

    toast.success("Password changed successfully");
  };

  return (
    <div className="w-full bg-base-100 rounded-md p-4 mt-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleChangePassword();
        }}
      >
        <div className="lg:flex w-full">
          <div className="flex-grow p-4 card bg-base-300 rounded-md place-items-center">
            <div className="w-full">
              <p className="text-lg font-bold">Password Setting</p>
              <div className="divider" />
            </div>
            <div className="w-full flex items-center">
              <div className="w-[35%]">
                <p>Old Password</p>
              </div>
              <div className="w-[65%]">
                <input
                  required
                  type="password"
                  placeholder="Type here"
                  className="input w-full"
                  value={password.oldPassword}
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      oldPassword: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="w-full flex items-center mt-5">
              <div className="w-[35%]">
                <p>New Password</p>
              </div>
              <div className="w-[65%]">
                <input
                  required
                  type="password"
                  placeholder="Type here"
                  className="input w-full"
                  value={password.newPassword}
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      newPassword: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="w-full flex items-center mt-5">
              <div className="w-[35%]">
                <p>Confirm New Password</p>
              </div>
              <div className="w-[65%]">
                <input
                  required
                  type="password"
                  placeholder="Type here"
                  className="input w-full"
                  value={password.confirmNewPassword}
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      confirmNewPassword: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start mt-5">
          <button type="submit" className="btn btn-neutral">
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
