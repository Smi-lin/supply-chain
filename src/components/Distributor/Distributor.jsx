"use client";
import React, { useState } from "react";
import Navbar from "../Home/Navbar";

const Distributor = () => {
  // State to store input values for each component
  const [formData, setFormData] = useState({
    warehouseLocation: "",
    trackingSystem: "",
    accounting: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 bg-[#e0e3e5] rounded-lg shadow-md p-4 w-[50vw] pt-[40px] mt-[70px] ">
        <div className="mb-6 text-[#00171f] text-[1.2rem] pt-4">
          <p> Name: Smilda</p>
          <p>Location: City, Country</p>
        </div>
        <form onSubmit={handleSubmit} className="ml-[5rem] ">
          {/* Warehouse Location */}
          <div className="mb-8 w-[40vw]">
            <label
              htmlFor="warehouseLocation"
              className="block text-sm font-bold mb-2"
            >
              Warehouse Location:
            </label>
            <input
              type="text"
              id="warehouseLocation"
              name="warehouseLocation"
              value={formData.warehouseLocation}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-[5rem] "
            />
          </div>

          {/* Tracking System */}
          <div className="mb-8 w-[40vw] ">
            <label
              htmlFor="trackingSystem"
              className="block text-sm font-bold mb-2"
            >
              Tracking System:
            </label>
            <input
              type="text"
              id="trackingSystem"
              name="trackingSystem"
              value={formData.trackingSystem}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-[5rem]"
            />
          </div>

          {/* Accounting */}
          <div className="mb-8 w-[40vw] ">
            <label
              htmlFor="accounting"
              className="block text-sm font-bold mb-2"
            >
              Accounting:
            </label>
            <input
              type="number"
              id="accounting"
              name="accounting"
              value={formData.accounting}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-[5rem]"
            />
          </div>

          {/* Add more input fields for other components here */}

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline ml-[15rem]"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Distributor;
