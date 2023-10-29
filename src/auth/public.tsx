"use client";
import { ReactElement, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

const PublicRoute = ({ children }: { children: ReactElement }) => {
  const router = useRouter();
  useEffect(() => {
    if (getCookie("login") && window) {
      router.back();
    }
  }, []);
  return getCookie("login") ? null : children;
};

export default PublicRoute;
