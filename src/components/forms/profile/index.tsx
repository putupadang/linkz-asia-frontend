import React from "react";
import { toast } from "react-toastify";
import useProfile from "@/zustand/profile";

const Profile = () => {
  const { profile, setProfile } = useProfile((state) => state);

  const handleSave = () => {
    toast.success("Changes saved successfully");
  };

  return (
    <div className="w-full bg-base-100 rounded-md p-4 mt-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div className="lg:flex w-full">
          <div className="flex-grow p-4 card bg-base-300 rounded-md place-items-center">
            <div className="w-full">
              <p className="text-lg font-bold">Profile</p>
              <div className="divider" />
            </div>
            <div className="w-full flex items-center">
              <div className="w-[35%]">
                <p>Name</p>
              </div>
              <div className="w-[65%]">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full"
                  value={profile?.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-full flex items-center mt-5">
              <div className="w-[35%]">
                <p>Email</p>
              </div>
              <div className="w-[65%]">
                <input
                  type="email"
                  placeholder="Type here"
                  className="input w-full"
                  value={profile?.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-full flex items-center mt-5">
              <div className="w-[35%]">
                <p>Phone</p>
              </div>
              <div className="w-[65%]">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full"
                  value={profile?.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-full flex items-center mt-5">
              <div className="w-[35%]">
                <p>Address</p>
              </div>
              <div className="w-[65%]">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full"
                  value={profile?.address}
                  onChange={(e) =>
                    setProfile({ ...profile, address: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="p-4 card bg-base-300 rounded-md place-items-center">
            <div className="w-full">
              <p className="text-lg font-bold">Email Preferences</p>
              <div className="divider" />
            </div>
            <div className="w-full">
              <p>please select your preferences for email notifications:</p>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="btn-group mt-10">
                  <button
                    type="button"
                    className={`btn ${
                      profile.emailPreference == "daily" && "btn-active"
                    }`}
                    onClick={() =>
                      setProfile({ ...profile, emailPreference: "daily" })
                    }
                  >
                    Daily
                  </button>
                  <button
                    type="button"
                    className={`btn ${
                      profile.emailPreference == "weekly" && "btn-active"
                    }`}
                    onClick={() =>
                      setProfile({ ...profile, emailPreference: "weekly" })
                    }
                  >
                    Weekly
                  </button>
                  <button
                    type="button"
                    className={`btn ${
                      profile.emailPreference == "monthly" && "btn-active"
                    }`}
                    onClick={() =>
                      setProfile({ ...profile, emailPreference: "monthly" })
                    }
                  >
                    Monthly
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start mt-5">
          <button type="submit" className="btn btn-neutral">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
