"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [formData,setFormData] = useState ({
    name: "",
    email: "",
    message: "",
  })
 
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md md:max-w-xl md:max-w-xl lg:max-w-2xl mt-10">
      {/* Title */}
      <h2 className="text-xl font-bold text-center mb-4 md:text-2xl lg:text-3xl text-black">Contact Us</h2>
      {/* FORM */}
      <form action="" className="space-y-4">
        <div>
          <label htmlFor="" className="block text-gray-700 text-sm font-medium mb-1">
            Name:
          </label>
          <input type="text" className="w-full px-4 py-2 border border-gary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="" className="block text-gray-700 text-sm font-medium mb-1">
            Email:
          </label>
          <input type="email" className="w-full px-4 py-2 border border-gary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="block text-gray-700 text-sm font-medium mb-1">
            Message:
          </label>
          <textarea name=""  rows={5} required className="w-full px-4 py-2 border border-gary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
}
