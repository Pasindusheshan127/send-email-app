"use client"
import { useState } from "react";

export default function Home() {

  const [formData,setFormData] = useState ({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert('Email sent successfully!');
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the email.');
    }
  }
 
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md md:max-w-xl md:max-w-xl lg:max-w-2xl mt-10">
      {/* Title */}
      <h2 className="text-xl font-bold text-center mb-4 md:text-2xl lg:text-3xl text-black">Contact Us</h2>
      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="" className="block text-gray-700 text-sm font-medium mb-1">
            Name:
          </label>
          <input type="text" value={formData.name} required onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border border-gary-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="" className="block text-gray-700 text-sm font-medium mb-1">
            Email:
          </label>
          <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full px-4 py-2 border border-gary-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="block text-gray-700 text-sm font-medium mb-1">
            Message:
          </label>
          <textarea name=""  rows={5} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-2 border border-gary-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
}
