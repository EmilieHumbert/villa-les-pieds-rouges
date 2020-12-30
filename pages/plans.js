import React, { useState } from "react";

export default function Plans() {
  const [active, setActive] = useState(0);

  return (
    <main>
      <div className="px-auto grid grid-cols-3 gap-4">
        <div className="selectSection h-xl w-xl bg-fullHouse bg-contain bg-center bg-no-repeat relative">
          <button
            onClick={() => setActive(2)}
            className="absolute w-2/3 h-40 top-28 left-28 border-double border-4 border-red-900 border-opacity-50 rounded-lg bg-white bg-opacity-25"
          ></button>
          <button
            onClick={() => setActive(1)}
            className="absolute w-2/3 h-40 top-72 left-28 border-double border-4 border-red-900 border-opacity-50 rounded-lg bg-white bg-opacity-25"
          ></button>
          <button
            onClick={() => setActive(0)}
            className="absolute w-2/3 h-40 bottom-24 left-28 border-double border-4 border-red-900 border-opacity-50 rounded-lg bg-white bg-opacity-25"
          ></button>
        </div>
        <div className="contentSection">
          {active === 2 && (
            <div className="content col-span-2 h-xl w-xl bg-second bg-contain bg-center bg-no-repeat"></div>
          )}
          {active === 1 && (
            <div className="content col-span-2 h-xl w-xl bg-first bg-contain bg-center bg-no-repeat"></div>
          )}
          {active === 0 && (
            <div className="content col-span-2 h-xl w-xl bg-ground bg-contain bg-center bg-no-repeat"></div>
          )}
        </div>
      </div>
    </main>
  );
}
