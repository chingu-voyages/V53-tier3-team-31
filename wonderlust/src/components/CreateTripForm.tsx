import React from 'react';

const CreateTripForm = () => {
  return (
    <div className="form-container w-[90%] ">
      <form className="form transition-all duration-300 ease-in mb-2 w-[100%] sm:w-[600px] lg:w-[800px] bg-white shadow-sm px-6 md:px-20 py-10 rounded-md">
        <h2 className="md:text-3xl text-2xl text-bold mb-6  font-bold">
          Create a New Trip
        </h2>
        <div className="flex-col flex gap-2 font-semibold text-gray-600">
          Trip Name
          <input
            name="tripname"
            className="form-field outline-none border-none font-normal text-gray-700"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col gap-2 font-semibold text-gray-600">
          Destination
          <input
            name="destination"
            className="form-field outline-none border-none font-normal text-gray-700"
            type="email"
            placeholder="Enter your destination"
          />
        </div>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex flex-col gap-2 font-semibold sm:w-[47%] text-gray-600">
            Start Date
            <input
              name="startDay"
              className="form-field outline-none border-none font-normal text-gray-700"
              type="date"
              placeholder="mm/dd/yyyy"
            />
          </div>
          <div className="flex flex-col gap-2 font-semibold sm:w-[47%] text-gray-600">
            End Date
            <input
              name="endDay"
              className="form-field outline-none border-none font-normal text-gray-700"
              type="date"
              placeholder="mm/dd/yyyy"
            />
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex flex-col gap-2 font-semibold text-gray-600 sm:w-[47%]">
            Budget
            <input
              name="budget"
              className="form-field outline-none border-none font-normal text-gray-700"
              type="text"
              placeholder="$10000"
            />
          </div>
          <div className="flex flex-col gap-2 font-semibold text-gray-600 sm:w-[47%]">
            Travelers
            <input
              name="travelers"
              className="form-field outline-none border-none font-normal text-gray-700"
              type="text"
              placeholder="0"
            />
          </div>
        </div>

        <div className=" flex gap-4 ml-auto mt-6">
          <button
            type="submit"
            className="px-4 w-auto py-2 rounded-lg my-1 bg-gray-100 hover:bg-gray-200 shadow-sm text-gray-600 font-semibold "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 w-auto py-2 rounded-lg my-1 bg-blue-600 hover:bg-blue-400 shadow-sm text-white font-semibold "
          >
            Create Trip
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTripForm;
