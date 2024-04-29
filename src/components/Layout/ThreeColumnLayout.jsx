import React from "react"

export default function ThreeColumnLayout() {
  return (
    <>
      {/*<!-- Component: Three columns even layout --> */}
      <section className="mb-5">
        <div className="container px-6 m-auto relative top-[-10vh] ">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 text-white text-center">
            <div className="col-span-4 py-[4rem] bg-[#6BC2B3]">
            Contact To Office
            
            </div>
            <div className="col-span-4 py-[4rem] bg-black">Our Communities</div>
            <div className="col-span-4 py-[4rem] bg-orange-500">Branches</div>
          </div>
        </div>
      </section>
      {/*<!-- End Three columns even layout --> */}
    </>
  )
}