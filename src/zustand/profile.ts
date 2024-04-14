import { create } from "zustand";

interface Profile {
  name: string;
  email: string;
  phone: string;
  address: string;
  emailPreference: string;
}

interface ProfileState {
  profile: Profile;
  setProfile: (profile: Profile) => void;
}

const useProfile = create<ProfileState>((set) => ({
  profile: {
    name: "I Putu Mas Sukardika",
    email: "mas.sukardika@gmail.com",
    phone: "+6281234567890",
    address: "Jl. Raya Kuta No. 1, Kuta, Bali",
    emailPreference: "daily",
  },
  setProfile: (profile) => set({ profile }),
}));

export default useProfile;
