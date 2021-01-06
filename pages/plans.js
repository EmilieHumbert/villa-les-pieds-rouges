import React, { useState } from "react";

import cx from "classnames";

export default function Plans() {
  const [active, setActive] = useState(0);

  return (
    <main>
      <div className="container gap-32 grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-4xl mx-auto">
        <div className="bg-contain bg-fullHouse bg-no-repeat bg-top col-span-1 h-xl relative w-xl">
          <button
            onClick={() => setActive(2)}
            className="absolute bg-opacity-25 bg-white border-4 border-double border-opacity-50 border-red-900 h-16 left-6 top-8 rounded-lg w-4/5"
          ></button>
          <button
            onClick={() => setActive(1)}
            className="absolute bg-opacity-25 bg-white border-4 border-double border-opacity-50 border-red-900 h-16 left-6 top-24 rounded-lg w-4/5"
          ></button>
          <button
            onClick={() => setActive(0)}
            className="absolute bg-opacity-25 bg-white border-4 border-double border-opacity-50 border-red-900 h-16 left-6 top-40 rounded-lg w-4/5"
          ></button>
        </div>
        <div className="col-span-2 contentSection">
          {active === 2 && (
            <div className="bg-second bg-contain bg-top bg-no-repeat col-span-2 content h-xl w-xl"></div>
          )}
          {active === 1 && (
            <div className="bg-first bg-contain bg-top bg-no-repeat col-span-2 content h-xl w-xl"></div>
          )}
          {active === 0 && (
            <div className="bg-ground bg-contain bg-top bg-no-repeat col-span-2 content h-xl w-xl"></div>
          )}
        </div>
      </div>
    </main>
  );
}
