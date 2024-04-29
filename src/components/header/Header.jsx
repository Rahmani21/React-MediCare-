import React, { useState, useEffect } from "react";
import style from "./header.module.css";
import {
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Modal from "../../modal/Modal";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [nav, setNav] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  { /*  const menuItems = [
    { icon: <TbTruckDelivery size={25} className="mr-4" />, text: "Orders" },
    { icon: <MdFavorite size={25} className="mr-4" />, text: "Favorites" },
    { icon: <FaWallet size={25} className="mr-4" />, text: "Wallet" },
    { icon: <MdHelp size={25} className="mr-4" />, text: "Help" },
  ];

*/ }
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <header>
        <div
          className={` bg-orange-400 text-white py-2.5  px-36   ${style.top_header}  `}
        >
          <div className={`flex justify-between items-center fw-bold`}>
            <div className={`flex gap-2 items-center`}>
              <i>
                <FaClock />
              </i>
              <p>Opening Hours: 9am Till 5pm Days a week </p>
            </div>
            <div>
              <ul className="flex gap-6">
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaLinkedin />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Inner Nav */}

        <div className={`${style.inner_header} bg-white-500 py-5`}>
          <div className="flex justify-around">
            <div className="items-center">
              <h1 className=" font-bold text-4xl">MediCare</h1>
            </div>
            <div className="">
              <ul className=" flex gap-10 uppercase">
                <li className="">
                  <div className="flex gap-5 items-center">
                    <div className=" border-slate-300 border rounded-full p-2 icon ">
                      <FaWhatsapp className="border-slate-300 border-0 size-6 text-orange-400 " />
                    </div>
                    <div className="text-center">
                      <h6 className=" font-semibold  ">whatsapp </h6>
                      <span className=" font-light">+93 7********</span>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="flex gap-5 items-center">
                    <div className=" border-slate-300 border rounded-full p-2 icon ">
                      <FaPhone className="border-slate-300 border-0 size-6 text-orange-400 " />
                    </div>
                    <div className="text-center">
                      <h6 className=" font-semibold ">Phone Number </h6>
                      <span className=" font-light">+93 7********</span>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="flex gap-5 items-center">
                    <div className=" border-slate-300 border rounded-full p-2 icon ">
                      <FaEnvelope className="border-slate-300 border-0 size-6 text-orange-400 " />
                    </div>
                    <div className="text-center">
                      <h6 className=" font-semibold">Contact Mail </h6>
                      <span className=" font-light">
                        test@gmail.com
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Side Drawer  */}

        <div className="max-w-[1640px] mx-auto flex justify-between items-center px-4">
          {/* Overlay */}
          {nav ? (
            <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
          ) : (
            ""
          )}

          {/* Side drawer menu */}
          <div
            className={
              nav
                ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
            }
          >
            <AiOutlineClose
              onClick={() => setNav(!nav)}
              size={30}
              className="absolute right-4 top-4 cursor-pointer"
            />
            <h2 className="text-2xl p-4">
              Medi<span className="font-bold">Care</span>
            </h2>
            <nav>
              <ul className="flex flex-col p-4 text-gray-800">
                {/*
              {menuItems.map(({ icon, text }, index) => {
                return (
                  <div key={index} className=" py-4">
                  <li className="text-xl flex cursor-pointer  w-[50%] rounded-full mx-auto p-2 hover:text-white hover:bg-black">
                  {icon} {text}
                  </li>
                  </div>
                  );
                })}
              */}

                <div  className=" py-1">
                  <li className="text-xl flex cursor-pointer w-[50%] rounded-full mx-auto p-2 hover:text-orange-500 ">
                    Home
                  </li>
                </div>
                <div  className=" py-1">
                  <li className="text-xl flex cursor-pointer w-[50%] rounded-full mx-auto p-2 hover:text-orange-500 ">
                    About Us
                  </li>
                </div>
                <div  className=" py-1">
                  <li className="text-xl flex cursor-pointer w-[50%] rounded-full mx-auto p-2 hover:text-orange-500 ">
                  Products
                  </li>
                </div>
                <div  className=" py-1">
                  <li className="text-xl flex cursor-pointer w-[50%] rounded-full mx-auto p-2 hover:text-orange-500 ">
                  Our Partner
                  </li>
                </div>
                <div  className=" py-1">
                  <li className="text-xl flex cursor-pointer w-[50%] rounded-full mx-auto p-2 hover:text-orange-500 ">
                  Branches
                  </li>
                </div>
                <div  className=" py-1">
                  <li className="text-xl flex cursor-pointer w-[50%] rounded-full mx-auto p-2 hover:text-orange-500 ">
                  Our Team
                  </li>
                </div>
                <div  className=" py-1">
                  <li className="text-xl flex cursor-pointer w-[50%] rounded-full mx-auto p-2 hover:text-orange-500 ">
                  Gallery
                  </li>
                </div>
                <div  className=" py-1">
                  <li className="text-xl flex cursor-pointer w-[50%] rounded-full mx-auto p-2 hover:text-orange-500 ">
                  Contact
                  </li>
                </div>
              </ul>

            </nav>
          </div>
        </div>

        {/* Mobile screen Inner Header */}
        <div className={`${style.responsiveMenu} bg-white-500 py-7`}>
          <div className="flex justify-around items-center">
            <div onClick={() => setNav(!nav)} className="cursor-pointer">
              <AiOutlineMenu size={30} />
            </div>

            <div className={`${style.logo} items-center`}>
              <h1 className={` font-bold text-6xl`}>MediCare</h1>
            </div>
            <div className="items-center">
              <button
                onClick={openModal}
                className="bg-orange-500 text-white px-2 py-2 rounded"
              >
                <IoMdSearch />
              </button>
              <Modal isOpen={modalIsOpen} onClose={closeModal} />
            </div>
          </div>
        </div>

        <div className={`${style.bottom_header} bg-[#6BC2B3] w-full z-10 ${scrollY > 130 ? 'fixed top-0 bg-[#6BC2B3] shadow-lg' : ''} transition-all duration-100 `}>
          <div className="flex justify-around items-center py-3">
            <div className="">
              <ul className="flex justify-center gap-10">
                <li className=" font-semibold text-white hover:text-orange-500">Home</li>
                <li className=" font-semibold text-white hover:text-orange-500">About Us</li>
                <li className=" font-semibold text-white hover:text-orange-500">Products</li>
                <li className=" font-semibold text-white hover:text-orange-500">Our Partner</li>
                <li className=" font-semibold text-white hover:text-orange-500">Branches</li>
                <li className=" font-semibold text-white hover:text-orange-500">Our Team</li>
                <li className=" font-semibold text-white hover:text-orange-500">Gallery</li>
                <li className=" font-semibold text-white hover:text-orange-500">Contact</li>
              </ul>
            </div>
            <div>
              <button
                onClick={openModal}
                className=" text-white text-xl px-2 py-2 rounded hover:text-orange-500"
              >
                <IoMdSearch />
              </button>
              <Modal isOpen={modalIsOpen} onClose={closeModal} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
