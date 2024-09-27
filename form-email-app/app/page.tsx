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
    <div className="">
      {/* Title */}
      <h2 className="">Contact Us</h2>
      {/* FORM */}
      <form action="" className="">
        <div>
          <label htmlFor="" className="">
            Name:
          </label>
          <input type="text" className="" />
        </div>
        <div>
          <label htmlFor="" className="">
            Email:
          </label>
          <input type="email" className="" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="">
            Message:
          </label>
          <textarea name=""  rows={5} required />
        </div>
        <div>
          <button type="submit" className="">
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
}
