import React, { useState } from "react";
import Link from "next/link";

export default function Navigation({ pages }) {
  const [selected, setSelected] = useState("Gallery");
  console.log(selected);

  return (
    <nav className="flex items-end justify-start mx-auto max-w-xl lg:max-w-4xl mt-20 mb-32 space-x-10 sm:space-x-18 lg:space-x-30">
      <Link href="/" onClick={() => setSelected("Gallery")}>
        <a className="font-black grid grid-rows-2 h-16 hover:text-red-800 text-3xl text-red-900 w-50">
          <div>Villa</div>
          <div>les pieds rouges</div>
        </a>
      </Link>{" "}
      {pages.map((page, index) => {
        return (
          <Link key={page} href="/" onClick={() => setSelected({ page })}>
            <a className="hover:text-gray-500 text-lg">{page}</a>
          </Link>
        );
      })}
    </nav>
  );
}
