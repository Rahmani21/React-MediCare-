import React from 'react'

const ProductsList = () => {
  return (
    <div className="">
    <div className="flex flex-col flex-wrap justify-center items-center container m-auto"> 
       <div className="md:flex ">
        <div id="product-card" className="rounded-md overflow-hidden bg-red-400 lg:w-96 m-4 transition transform-gpu duration-500 ease-in-out shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-4">
          <div className="card-img">
              <img className="w-full m-auto h-64 object-cover object-center" src="https://picsum.photos/200/300" alt="product" />
          </div>
          <div className="card-text text-left p-4">
            <h2 className="text-xl text-gray-800 font-semibold">Product Title</h2>
            <p className="text-lg text-white">$10.00</p>
          </div>
        </div>
        <div id="product-card" className="rounded-md overflow-hidden bg-red-400 lg:w-96 m-4 transition transform-gpu duration-500 ease-in-out shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-4">
          <div className="card-img">
              <img className="w-full m-auto h-64 object-cover object-center" src="https://picsum.photos/200/300" alt="product" />
          </div>
          <div className="card-text text-left p-4">
            <h2 className="text-xl text-gray-800 font-semibold">Product Title</h2>
            <p className="text-lg text-white">$10.00</p>
          </div>
        </div>
        <div id="product-card" className="rounded-md overflow-hidden bg-red-400 w-96 m-4 transition transform-gpu duration-500 ease-in-out shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-4">
          <div className="card-img">
              <img className="w-full m-auto h-64 object-cover object-center" src="https://picsum.photos/200/300" alt="product" />
          </div>
          <div className="card-text text-left p-4">
            <h2 className="text-xl text-gray-800 font-semibold">Product Title</h2>
            <p className="text-lg text-white">$10.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductsList
