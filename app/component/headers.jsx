"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { useTheme } from "next-themes";
// import { Sun, Moon } from "lucide-react";

function Headerss() {
//   const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const mounthed = () => {
    setMounted(true);
  };

  useEffect(() => {
    mounthed();
    setMounted(true);
  }, []);

  return (
    <>
      <div className=" text-white flex gap-10 flex-row p-4 bg-[#06142E]">
        <Link href="/">
                  <h1>home page</h1>

        </Link>
        <Link href="/Project">
          <h1>Project page</h1>
        </Link>
        <Link href="/#Services">
          <h1>Services</h1>
        </Link>
        <Link href="/SignUp">
          <h1>Register Up</h1>
        </Link>
        <Link href="/Appointment">
          <h1>Appointment</h1>
        </Link>

        

        {/* <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-auto p-2 rounded-lg bg-secondary hover:opacity-80 transition-all"
          aria-label="Toggle theme"
        >
          {mounted &&
            (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
        </button> */}
      </div>

      {/* <div className="grid p-4 grid-cols-4 lg:hidden">
          <Image src="/Image/bossvnnlogo.png" alt="logo" width={40} height={40} className="w-10 h-10 rounded-full" />
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-auto p-2 rounded-lg bg-secondary hover:opacity-80 transition-all"
          aria-label="Toggle theme"
        >
          {mounted &&
            (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
        </button>
        <Link href="/Login">
          <h1>login</h1>
        </Link>
       <SideBarss/>
      </div> */}
    </>
  );
}

export default Headerss;