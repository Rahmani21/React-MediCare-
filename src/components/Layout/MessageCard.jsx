import React from "react";

export default function MessageCard() {
  return (
    <>
      {/*<!-- Component: Horizontal card--> */}
      <div className="flex flex-col items-center overflow-hidden bg-slate-900 rounded shadow-md text-white shadow-slate-200 sm:flex-row">
        {/*  <!-- Image --> */}
        <div className=" p-24">
          <figure className="flex-1">
            <img
              src="https://picsum.photos/id/118/800/600"
              alt="card image"
              className="object-cover  min-h-full w-[50vw] h-[50vh] aspect-auto"
            />
          </figure>
        </div>
        {/*  <!-- Body--> */}
        <div className="flex-4 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <div>
              <h3 className="text-xl font-medium text-white">
                Founder Message
              </h3>
              <p className="text-sm text-slate-400"> By Sue, jun 3 2023</p>
            </div>
          </header>
          <p>
            After a walk through history, there is nothing left to do but admire
            the hypnotizing landscapes that exist in every direction. From vast
            deserts to rainbow mountains, and everything in between.
          </p>
        </div>
      </div>
      {/*<!-- End Horizontal card--> */}
    </>
  );
}
