import AuthHook from "@/hooks/useAuth";
import { fetcher } from "@/utils/helper";
import { validateForm } from "@/utils/validation";
import useLoadingScreen from "@/zustand/loadingScreen";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { z } from "zod";

const schemaForm = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const Login = () => {
  const route = useRouter();
  const { setTokenAuth } = AuthHook();
  const { setShowLoadingScreen } = useLoadingScreen((state) => state);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const doLogin = async () => {
    setShowLoadingScreen(true);
    const validate: any = validateForm(loginForm, schemaForm);
    if (!validate.valid) return setShowLoadingScreen(false);

    const res = await fetcher("POST", "/user/login", JSON.stringify(loginForm));
    if (res?.status == "success") {
      setTokenAuth(res.token);
      route.push("/");
      toast.success("Login Berhasil");
      setShowLoadingScreen(false);
    }

    setShowLoadingScreen(false);
    return toast.error(res.message);

    // setTokenAuth(res.token);
    // setUser(res.user);
    // route.push("/");
    // toast.success("Login Berhasil");
    // setShowLoadingScreen(false);
  };

  return (
    <>
      <Head>
        <title>Linkz Asia - Login</title>
      </Head>

      <div className="bg-gray-navy w-screen h-screen">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="-mt-32 w-full flex flex-col justify-center items-center">
            <div className="mb-10">
              <div className="w-full flex justify-center">
                <p className="font-ranade text-3xl">Linkz Asia - Login</p>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                doLogin();
              }}
              className="w-full px-5 md:px-0 md:w-[500px]"
            >
              <div className="bg-white w-full rounded-md border border-gray-200 p-10 text-black">
                <p className="font-ranade text-xl text-center">Login</p>
                <div className="mt-5">
                  <p>Email *</p>
                  <input
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, email: e.target.value })
                    }
                    type="email"
                    className="w-full mt-1 p-2 border border-gray-200 rounded-md outline-none text-gray-price text-white"
                  />
                </div>
                <div className="mt-5">
                  <p>Password *</p>
                  <input
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, password: e.target.value })
                    }
                    type="password"
                    className="w-full mt-1 p-2 border border-gray-200 rounded-md outline-none text-gray-price text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-10 py-2 bg-navy-base text-white rounded-md bg-gray-400"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex items-center mt-5">
              <p className="text-xs font-manrope text-gray-white">
                Don't have an account?
              </p>
              <p
                onClick={() => route.push("/register")}
                className="text-xs ml-1 hover:underline cursor-pointer"
              >
                Register
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
