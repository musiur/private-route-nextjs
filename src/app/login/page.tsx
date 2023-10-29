"use client";

import PublicRoute from "@/auth/public";
import { login } from "@/contexts/preact";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const handleLogin = () => {
    login.value += 1;
    setCookie("login", JSON.stringify({ login: "true" }));
    login.value = { login: "true" };
    router.back();
  };
  return (
    <PublicRoute>
      <div className="container flex flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-black">Login</h1>
        <button
          className="border border-gray-800 px-4 py-2 rounded-md mt-10 active:border-gray-500 active:bg-white/30 transition ease-in-out"
          onClick={handleLogin}
        >
          Login now
        </button>
      </div>
    </PublicRoute>
  );
};

export default Login;
