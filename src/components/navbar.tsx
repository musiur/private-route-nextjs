"use client";
import { login } from "@/contexts/preact";
import { deleteCookie } from "cookies-next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex items-center justify-center gap-10 container py-4">
        <Link
          href="/"
          className={`border-b-2 border-black ${
            pathname === "/" ? "border-blue-200" : ""
          }`}
        >
          <li>Home</li>
        </Link>
        {login.value ? (
          <Link
            href="/dashboard"
            className={`border-b-2 border-black ${
              pathname.includes("/dashboard") ? "border-blue-200" : ""
            }`}
          >
            <li>Dashboard</li>
          </Link>
        ) : null}

        {login.value ? (
          <button
            className="text-pink-600"
            onClick={() => {
              deleteCookie("login");
              login.value = null;
              router.push("/login");
            }}
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className={`border-b-2 border-black ${
              pathname.includes("/login") ? "border-blue-200" : ""
            }`}
          >
            <li className="text-blue-400">Login</li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
