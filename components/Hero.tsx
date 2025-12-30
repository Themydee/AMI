"use client";

import Link from "next/link";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="border-b">
      <div className="main-container inner py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold max-w-xl leading-tight">
            Africa’s Commodity Price Intelligence, Updated Weekly
          </h1>

          <p className="mt-4 text-lg text-muted-foreground max-w-lg">
            Market-based commodity prices sourced from verified local markets.
            Transparent data, clear methodology, and weekly updates you can trust.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/prices"
              className="px-6 py-3 bg-black text-white rounded-md font-medium hover:opacity-90 transition"
            >
              View Latest Prices
            </Link>

            <Link
              href="/data"
              className="px-6 py-3 border border-gray-300 rounded-md font-medium hover:bg-gray-50 transition"
            >
              How Prices Are Calculated
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
