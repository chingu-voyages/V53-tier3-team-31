"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


function page() {
  const [userDetails,setUserDetails] = useState({
    email:"",
    pass:"",
    cpass:""
  })
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (userDetails?.pass !== userDetails?.cpass) {
          toast.error("Passwords do not match");
          return;
        }
    
        try {
          const response = await fetch('/api/auth/reset_password', { 
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: userDetails.email, 
                password: userDetails.pass 
            }),
          });
          console.log(response?.ok,"Response--",response)
    
          if (response?.ok) {
            console.log("ASdasdasd")
            toast.success("Password Reset Successfully")
            setUserDetails({
              email:"",
              pass:"",
              cpass:""
            })
          }
        } catch (err) {
          toast.error(err.message);
        }
      };
  return (
    <section>
      <ToastContainer/>
  <div className="bg-white relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
    <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
      <div className="flex flex-col">
        <div>
          <h2 className="text-4xl text-black">Reset password</h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input value="https://jamstacker.studio/thankyou" type="hidden" name="_redirect" />
        <div className="mt-4 space-y-6">
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600">Email</label>
            <input
            onChange={(e) =>{
              setUserDetails({
                ...userDetails,
                email:e?.target?.value
              })
            }}
            type="text" placeholder="Enter Email" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
          </div>
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600">New Password   </label>
            <input 
             onChange={(e) =>{
              setUserDetails({
                ...userDetails,
                pass:e?.target?.value
              })
            }}
            type="password" placeholder="******" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
          </div>
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600"> Confirm password   </label>
            <input
             onChange={(e) =>{
              setUserDetails({
                ...userDetails,
                cpass:e?.target?.value
              })
            }}
            type="password" placeholder="******" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
          </div>

          <div className="col-span-full">
            <button type="submit" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"> Submit your request   </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>
  )
}

export default page