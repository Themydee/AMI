"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header>
      <div className="main-container inner">
        <Link href="/" className="text-2xl font-bold">
          AMI
        </Link>

        <nav>
          <Link
            href="/prices"
            className={
              pathname === "/prices" ? "nav-link is-active" : "nav-link"
            }
          >
            Prices
          </Link>
          <Link
            href="/market"
            className={
              pathname === "/market" ? "nav-link is-active" : "nav-link"
            }
          >
            Market
          </Link>
          <Link
            href="/data"
            className={pathname === "/data" ? "nav-link is-active" : "nav-link"}
          >
            Data Sources
          </Link>
        </nav>

        <Link href="/login">Login</Link>
      </div>
    </header>
  );
};

export default Header;