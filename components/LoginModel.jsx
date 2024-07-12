import React from "react";
import { createPortal } from "react-dom";

const LoginModel = ({ isOpen, setisOpen }) => {
  return createPortal(
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setisOpen(false);
        }}
        className={`z-10 fixed inset-0 overflow-y-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="sm:block flex justify-center items-center px-4 sm:p-0 pt-4 pb-20 min-h-screen text-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="sm:inline-block hidden sm:align-middle sm:h-screen"></span>
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="inline-block align-bottom bg-white shadow-xl sm:my-8 px-4 sm:p-6 pt-5 pb-4 rounded-lg sm:w-full sm:max-w-lg text-left transform transition-all overflow-hidden sm:align-middle"
          >
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                alt="Shoezi"
                src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600"
                className="mx-auto w-auto h-10"
              />
              <h2 className="mt-10 font-bold text-[#D01C28] text-2xl text-center leading-9 tracking-tight">
                Sign in to your account
              </h2>
            </div>

            <div className="sm:mx-auto mt-10 sm:w-full sm:max-w-sm">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium text-[#D01C28] text-sm leading-6"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block border-0 shadow-sm py-1.5 rounded-md w-full text-[#D01C28] placeholder:text-gray-400 ring-[#D01C28] ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-[#D01C28] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block font-medium text-[#D01C28] text-sm leading-6"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-[#aa2c35] hover:text-[#D01C28]"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block border-0 shadow-sm py-1.5 rounded-md w-full text-[#D01C28] placeholder:text-gray-400 ring-[#D01C28] ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-[#D01C28] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex justify-center bg-[#D01C28] hover:bg-[#D01C28] shadow-sm px-3 py-1.5 rounded-md w-full font-semibold text-sm text-white leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-gray-500 text-sm">
                Not a member?{" "}
                <a
                  href="#"
                  className="font-semibold text-[#D01C28] hover:text-[#D01C28] leading-6"
                >
                  Start a 14 day free trial
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default LoginModel;
