import React from 'react';
import style from './modal.module.css'
const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="z-20 bg-white p-6 rounded-lg w-1/2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Search</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
              />
              {/* Additional content can be added here */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
