import React, { useState } from "react";

export default function Plans() {
  const [active, setActive] = useState(0);

  return (
    <main>
      <div className="container gap-x-32 grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-4xl mx-auto">
        <h1 className="border-b-2 border-red-900 col-span-2 font-bold mb-8 text-2xl">
          House's plans
        </h1>
        <p className="col-span-2 leading-normal mb-8 text-xl tracking-wide">
          Click on the floor you want to have info on and see its plan below.
        </p>
        <div className="bg-contain bg-fullHouse bg-no-repeat bg-top col-span-2 h-xl mb-8 relative w-xl">
          <button
            onClick={() => setActive(2)}
            className="absolute bg-opacity-25 bg-white border-4 border-double border-opacity-50 border-red-900 h-28 left-14 top-28 rounded-lg w-4/5"
          ></button>
          <button
            onClick={() => setActive(1)}
            className="absolute bg-opacity-25 bg-white border-4 border-double border-opacity-50 border-red-900 h-28 left-14 top-64 rounded-lg w-4/5"
          ></button>
          <button
            onClick={() => setActive(0)}
            className="absolute bottom-32 bg-opacity-25 bg-white border-4 border-double border-opacity-50 border-red-900 h-28 left-14 rounded-lg w-4/5"
          ></button>
          {active === 2 && (
            <button
              onClick={() => setActive(2)}
              className="absolute bg-opacity-50 bg-white border-47 border-red-900 h-28 left-14 top-28 rounded-lg w-4/5"
            ></button>
          )}
          {active === 1 && (
            <button
              onClick={() => setActive(1)}
              className="absolute bg-opacity-50 bg-white border-47 border-red-900 h-28 left-14 top-64 rounded-lg w-4/5"
            ></button>
          )}
          {active === 0 && (
            <button
              onClick={() => setActive(0)}
              className="absolute bg-opacity-50 bg-white border-47 border-red-900 bottom-32 h-28 left-14 rounded-lg w-4/5"
            ></button>
          )}
        </div>
        <div className="col-span-1 lg:row-start-1 lg:row-span-3 lg:col-start-3 w-md lg:w-sm">
          <h1 className="border-b-2 border-red-900 col-span-1 font-bold mb-8 text-2xl">
            Details
          </h1>
          {active === 2 && (
            <p className="leading-normal mb-8 text-xl tracking-wide">
              On the second floor, you will find the main insuite bedroom with a
              balcony. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              <br />
              Quisque faucibus odio ac nisl venenatis congue. Nulla eros lectus,
              pulvinar a urna a, condimentum tempus lorem. Ut eros felis,
              maximus quis maximus vitae, congue id turpis. Nulla facilisi.
              <br />
              Quisque faucibus odio ac nisl venenatis congue. Nulla eros lectus,
              pulvinar a urna a, condimentum tempus lorem.
            </p>
          )}
          {active === 1 && (
            <p className="leading-normal mb-8 text-xl tracking-wide">
              On the first floor, you will find two bedrooms with view on the
              beach and a bathroom. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
              <br />
              Quisque faucibus odio ac nisl venenatis congue. Nulla eros lectus,
              pulvinar a urna a, condimentum tempus lorem. Ut eros felis,
              maximus quis maximus vitae, congue id turpis. Nulla facilisi.
            </p>
          )}
          {active === 0 && (
            <p className="leading-normal mb-8 text-xl tracking-wide">
              On the ground floor, you will find the living space with a big
              open kitchen. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
              <br />
              Quisque faucibus odio ac nisl venenatis congue. Nulla eros lectus,
              pulvinar a urna a, condimentum tempus lorem. Ut eros felis,
              maximus quis maximus vitae, congue id turpis. Nulla facilisi.
            </p>
          )}
        </div>
        <div className="col-span-2 lg:col-span-3 row-2 contentSection">
          <h1 className="border-b-2 border-red-900 font-bold mb-8 mt-8 text-2xl">
            Floor's plans
          </h1>
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
