import { fetcher } from "@/utils/helper";
import { validateForm } from "@/utils/validation";
import useLoadingScreen from "@/zustand/loadingScreen";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { z } from "zod";

const schemaForm = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password does not match",
    path: ["confirmPassword"],
  });

const Register = () => {
  const route = useRouter();
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { setShowLoadingScreen } = useLoadingScreen((state) => state);

  const doRegister = async () => {
    setShowLoadingScreen(true);
    const validate: any = validateForm(registerForm, schemaForm);
    if (!validate.valid) return setShowLoadingScreen(false);

    const params = {
      name: registerForm.name,
      email: registerForm.email,
      password: registerForm.password,
    };

    const res = await fetcher("POST", "/user/register", JSON.stringify(params));
    if (res?.status == "success") {
      route.push("/login");
      toast.success("Successfully Register");
      setShowLoadingScreen(false);
    }

    setShowLoadingScreen(false);
    return toast.error(res.message);
  };

  return (
    <>
      <Head>
        <title>Linkz Asia - Register</title>
      </Head>

      <div className="w-screen h-screen">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="bg-gray-navy pb-10 pt-10 md:pt-0 w-full flex flex-col justify-center items-center">
            <div className="mb-10 mt-20 md:mt-10">
              <div className="w-full flex justify-center">
                <p className="font-ranade text-3xl">Linkz Asia - Register</p>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                doRegister();
              }}
              className="w-full px-5 md:px-0 md:w-[500px]"
            >
              <div className="bg-white w-full rounded-md border border-gray-200 p-10 text-black">
                <p className="font-ranade text-xl text-center">Register</p>
                <div className="mt-5 text-sm">
                  <p>Name *</p>
                  <input
                    onChange={(e) =>
                      setRegisterForm({ ...registerForm, name: e.target.value })
                    }
                    type="text"
                    className="w-full mt-1 p-2 border border-gray-200 rounded-md outline-none text-gray-price text-white"
                  />
                </div>
                <div className="mt-5 text-sm">
                  <p>Email *</p>
                  <input
                    onChange={(e) =>
                      setRegisterForm({
                        ...registerForm,
                        email: e.target.value,
                      })
                    }
                    type="email"
                    className="w-full mt-1 p-2 border border-gray-200 rounded-md outline-none text-gray-price text-white"
                  />
                </div>
                <div className="mt-5 text-sm">
                  <p>Password *</p>
                  <input
                    onChange={(e) =>
                      setRegisterForm({
                        ...registerForm,
                        password: e.target.value,
                      })
                    }
                    type="password"
                    className="w-full mt-1 p-2 border border-gray-200 rounded-md outline-none text-gray-price text-white"
                  />
                </div>
                <div className="mt-5 text-sm">
                  <p>Password Confirmation *</p>
                  <input
                    onChange={(e) =>
                      setRegisterForm({
                        ...registerForm,
                        confirmPassword: e.target.value,
                      })
                    }
                    type="password"
                    className="w-full mt-1 p-2 border border-gray-200 rounded-md outline-none text-gray-price text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-10 py-2 bg-navy-base text-white rounded-md bg-gray-400"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="flex items-center mt-5">
              <p className="text-xs font-manrope text-gray-white">
                Already have an account?
              </p>
              <p
                onClick={() => route.push("/login")}
                className="text-xs ml-1 hover:underline cursor-pointer"
              >
                Login
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
