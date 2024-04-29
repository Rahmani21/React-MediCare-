import React from "react";
import Image from "./../images/assets/4.jpg";

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative rounded overflow-hidden">
        <img
          src="https://source.unsplash.com/400x300/?hanging-planters"
          alt="Hanging Planters"
          className="w-full h-[70vh]"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Hanging Planters
        </p>
      </div>
      <div className="max-w-[1320px] md:p-[80] p-5 flex mx-auto md:flex-row flex-col">
        <div className="basis-[40%]">
          <img src={Image} alt="" className="w-full h-screen" />
        </div>
        <div className="basis-[60%] px-10 py-5">
          <div>
            <h2 className=" text-3xl pb-5">
              <strong className=" font-bold">About</strong>{" "}
              <span className="text-orange-500">Medicare</span>
            </h2>

            <p className="text-gray-600">
              At Medicare, we understand that navigating the world of Medicare
              can be daunting. That's why we're here to simplify the process for
              you. Whether you're approaching Medicare eligibility for the first
              time, exploring coverage options, or seeking clarification on
              complex healthcare matters, our comprehensive resources and expert
              guidance are designed to support you every step of the way.
            </p>
          </div>
          <div className="py-10"> 
            <h2 className=" text-3xl pb-5">
              <strong className=" font-bold">Our</strong>{" "}
              <span className="text-orange-500">Mission</span>
            </h2>

            <p className="text-gray-600">
            "Our mission is to be the premier online destination for Medicare information and assistance. We are dedicated to simplifying the complexities of Medicare, offering clear guidance, expert advice, and valuable resources to beneficiaries, caregivers, and healthcare professionals. Through innovation, education, and compassionate support, we strive to enhance the well-being of our users and contribute to a healthcare system that prioritizes quality, affordability, and inclusivity."
            </p>
          </div>
          <div>
            <h2 className=" text-3xl pb-5">
              <strong className=" font-bold">Our</strong>{" "}
              <span className="text-orange-500">Vision</span>
            </h2>

            <p className="text-gray-600">
            "To create a healthier and more informed society by providing accessible, comprehensive, and reliable Medicare resources to all individuals, empowering them to make informed healthcare decisions and lead fulfilling lives."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
