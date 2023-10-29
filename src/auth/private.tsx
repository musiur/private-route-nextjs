"use client";
import { ReactElement, useEffect } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/contexts/preact";

const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const router = useRouter();
  useEffect(() => {
    if (!login.value && window) {
      router.push("/login");
    }
  }, []);
  return login.value ? children : null;
};

export default PrivateRoute;
