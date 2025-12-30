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
            href="#"
            className={
              pathname === "#" ? "nav-link is-active" : "nav-link"
            }
          >
            Prices
          </Link>
          <Link
            href="#"
            className={
              pathname === "#" ? "nav-link is-active" : "nav-link"
            }
          >
            Market
          </Link>
          <Link
            href="#"
            className={pathname === "#" ? "nav-link is-active" : "nav-link"}
          >
            Data Sources
          </Link>
        </nav>

        <Link href="#">Login</Link>
      </div>
    </header>
  );
};

export default Header;