"use client";

import React, { useRef , useEffect} from "react";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiOutlineNumber } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import   Aos   from "aos"
import  "aos/dist/aos.css"

function Contect() {
  useEffect(()  => {

    Aos.init({duration:1000})
})
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useRef();
  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ay15j3g",
        "template_os691fi",
        "_StDsKEdEAHN-joRS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

    <>
    
    <div id="section-contect"
      className="max-w-5xl mx-auto p-4 my-20 "
      style={{
        backgroundImage: `url(./img/magicpattern-confetti-1692595877832.png)`,
      }}
    >
      <div  className="mt-20 ">

<h2 className="font-extrabold text-bold text-blue-600 text-md">send to</h2>
<h3 className="text-3xl font-extrabold ">Send us your email here </h3>
</div>
      {/* main */}
      <div
        className=" flex flex-col-reverse md:flex-row justify-between items-center 
            space-x-8"
      >
        {/* left */}
        <div
          className="flex flex-col space-y-5 shadow-2xl bg-white shadow-cyan-600
            px-10  py-16 my-3"
       data-aos = "fade-left" >
          <div className="flex  space-x-3">
            {/* one */}
            <BsFillPersonCheckFill className="text-2xl" />
            <h1 className="font-DM   text-xl font-bold text-gray-800">
              Abdiladif salah..
            </h1>
          </div>

          <div className="flex  space-x-3">
            <AiOutlineNumber className="text-xl" />
            <h1 className="font-DM   text-xl font-bold text-gray-800">
              0634991174
            </h1>
          </div>
          <div className="flex space-x-3">
            <MdEmail className="text-2xl" />
            <h1 className="font-DM text-xl  font-bold">
              cabdiladiifsaalax988@gmail.com
            </h1>
          </div>
        </div>

        {/* right */}

        <div>
          <form
            className="w-full   max-w-md space-y-2 bg-white  p-10"
            onSubmit={sendEmail}
        
          >
            {/* one */}

            <input
              className="w-96 p-3 border-2 border-cyan-500
                    focus:outline-none focus:ring-indigo-500  focus:border-indigo-600
                    shadow-2xl shadow-cyan-600 rounded-2xl"
              type="text"
              placeholder="Name"
              name="name"
            />

            {/* one */}

            <input
              className="w-96 p-3 border-2 border-cyan-500
              focus:outline-none focus:ring-indigo-500  focus:border-indigo-600
              shadow-2xl shadow-cyan-600 rounded-2xl"
              type="text"
              placeholder="Email "
              name="email"
            />

            {/* one */}

            <input
              className="w-96 p-3 border-2 border-cyan-500
              focus:outline-none focus:ring-indigo-500  focus:border-indigo-600
              shadow-2xl shadow-cyan-600 rounded-2xl"
              type="number"
              placeholder="number"
              name="email"
            />

            <input
              type="text"
              className="w-96 p-8 border-2 border-cyan-500
              focus:outline-none focus:ring-indigo-500  focus:border-indigo-600
              shadow-2xl shadow-cyan-600 rounded-2xl"
              placeholder="mesage"
              name="message"
            />

            <button
              type="submit"
              className="btn flex  w-32 rounded-md bg-blue-500 justify-center items-center px-5 py-2"
            >
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    className="text-white "
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <span className="text-white">Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contect;