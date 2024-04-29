import React from "react";

const Products = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl md:text-5xl text-center mt-5">
          Our Main Products
        </h2>
      </div>
      <div className="flex flex-col md:grid lg:grid-cols-3 lg:p-[10rem] md:grid-cols-2 gap-3 md:p-5 p-5">
        <div className="  hover:shadow-lg transition duration-300">
          <div className="relative">
            <img
              src="https://source.unsplash.com/400x300/?planter-stand"
              alt="Planter Stand with Pots"
              className="w-full "
            />
            <div className="absolute top-[50%] left-0 right-0 bg-black bg-opacity-50 font-extrabold text-white text-center p-2 opacity-0 hover:opacity-100 transition duration-300">
              Product Name
            </div>
          </div>
        </div>
        <div className="  hover:shadow-lg transition duration-300">
          <div className="relative">
          <img
            src="https://source.unsplash.com/400x300/?planter-stand"
            alt="Planter Stand with Pots"
            className="w-full"
          />
            <div className="absolute top-[50%] left-0 right-0 bg-black bg-opacity-50 font-extrabold text-white text-center p-2 opacity-0 hover:opacity-100 transition duration-300">
              Product Name
            </div>
          </div>
        </div>
        <div className="  hover:shadow-lg transition duration-300">
          <div className="relative">
            <img
              src="https://source.unsplash.com/400x300/?planter-stand"
              alt="Planter Stand with Pots"
              className="w-full "
            />
            <div className="absolute top-[50%] left-0 right-0 bg-black bg-opacity-50 font-extrabold text-white text-center p-2 opacity-0 hover:opacity-100 transition duration-300">
              Product Name
            </div>
          </div>
        </div>
        <div className="  hover:shadow-lg transition duration-300">
          <div className="relative">
          <img
            src="https://source.unsplash.com/400x300/?planter-stand"
            alt="Planter Stand with Pots"
            className="w-full"
          />
            <div className="absolute top-[50%] left-0 right-0 bg-black bg-opacity-50 font-extrabold text-white text-center p-2 opacity-0 hover:opacity-100 transition duration-300">
              Product Name
            </div>
          </div>
        </div>
        <div className="  hover:shadow-lg transition duration-300">
          <div className="relative">
            <img
              src="https://source.unsplash.com/400x300/?planter-stand"
              alt="Planter Stand with Pots"
              className="w-full "
            />
            <div className="absolute top-[50%] left-0 right-0 bg-black bg-opacity-50 font-extrabold text-white text-center p-2 opacity-0 hover:opacity-100 transition duration-300">
              Product Name
            </div>
          </div>
        </div>
        <div className="  hover:shadow-lg transition duration-300">
          <div className="relative">
          <img
            src="https://source.unsplash.com/400x300/?planter-stand"
            alt="Planter Stand with Pots"
            className="w-full"
          />
            <div className="absolute top-[50%] left-0 right-0 bg-black bg-opacity-50 font-extrabold text-white text-center p-2 opacity-0 hover:opacity-100 transition duration-300">
              Product Name
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a
          href=""
          className="inline-block  bg-[#6BC2B3] text-white font-bold p-4 mb-5 lg:mt-[-10%] rounded"
        >

          See More Products
        </a>
      </div>
    </div>
  );
};

export default Products;
