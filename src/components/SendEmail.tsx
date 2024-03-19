
"use client"

import { Card } from "./ui/card";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
    const form = useRef();
    e.preventDefault();

    emailjs
      .sendForm('service_mand12c', 'template_cwz9xbn', form.current, {
        publicKey: 'Pzac•••••••••••••••••',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

function SendEmail() {
  return (
    <div className="max-w-4xl mx-auto p-4 my-10">
      <div>
        <Card className="px-5 py-5">
          <form onSubmit={sendEmail}>
            {/* email and name */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input
                className="px-3 py-2 outline-none
                 border-purple-700  border-[1px] rounded-md text-sm dark:bg-gray-900   bg-gray-200 bg-opacity-45 
                 dark:placeholder:text-white "
                type="text"
                placeholder="enter your Name"
                name="name"
              />
              <input
                className="px-3 py-2 outline-none
                 border-purple-700  border-[1px] rounded-md text-sm dark:bg-gray-900   bg-gray-200 bg-opacity-45
                 dark:placeholder:text-white"
                type="text"
                placeholder="enter your email"
               name="email"
              />
            </div>
            <div className="mt-3">
              <input
                className="relative px-10 py-10 md:px-16 text-start top-0
                    outline-none
                    border-purple-700  border-[1px] rounded-md text-sm dark:bg-gray-900   bg-gray-200 bg-opacity-45 
                    dark:placeholder:text-white"
                type="text"
                placeholder="Send mesaage"
                name="message"
              />
            </div>

            <div className="my-4">
              <button  type="submit"
                className="px-3 py-2 bg-purple-700 text-white
                    rounded-md text-sm"
              >
                send email
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default SendEmail;
