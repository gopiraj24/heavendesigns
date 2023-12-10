import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser' 

const ContactForm = () => {
  const [name ,setName]= useState("");
  const [email,setEmail]= useState("");
  const [mobile,setMobile]=useState("");
  const [comment,setComment]= useState("");
  
   const submitForm=(e)=>{
    e.preventDefault();
    const form = {name,email,mobile,comment}
    const service_id = "service_35cojnr";
    const template_id = 'template_amo5e0v';
    const public_key = "n7CFm_4I1jm-RajQF";

    // user Message params
    const template_params = {
     from_name:name,
     from_email:email,
     from_mobile:mobile,
     to_name:"Heaven Designs",
     from_message:comment
    }

    // send the email using emaijs 
    emailjs.send(service_id,template_id,template_params,public_key)
    .then((response)=>{
      console.log("Email sent successfully!",response)
      setName('')
      setEmail('')
      setMobile('')
      setComment('')
    })
    .catch((error)=>{
      console.log('Error Sending Email',error)
    })
   }

  return (
    <form onSubmit={submitForm} className="flex items-center justify-center h-screen">
      <div className="w-full max-w-2xl px-5 py-10 bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
          Contact us!
        </div>
        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
          <div className="col-span-2 lg:col-span-1">
            <div className="relative">
              <input
                type="text"
                id="contact-form-name"
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="relative">
              <input
                type="text"
                id="contact-form-email"
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value) }

              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="relative">
              <input
                type="tel"
                id="contact-form-mobile"
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e)=>setMobile(e.target.value)}
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="text-gray-700" htmlFor="comment">
              <textarea
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                placeholder="Enter your comment"
                name="comment"
                rows="5"
                cols="40"
                value={comment}
                onChange={(e)=>setComment(e.target.value)}
              ></textarea>
            </label>
          </div>
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="w-full px-4 py-2 text-base font-semibold text-white transition duration-200 ease-in rounded-lg shadow-md bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 focus:ring-offset-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
