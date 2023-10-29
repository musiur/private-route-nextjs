"use client"

import { signal } from "@preact/signals";
import { getCookie } from "cookies-next";
export const login = signal<any>(getCookie("login") ? getCookie("login") : null);


const Preacts = () => {
    return null
}
export default Preacts;