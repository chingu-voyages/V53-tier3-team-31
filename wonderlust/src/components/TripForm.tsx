import React from 'react';
import { Dialog, Button } from '@radix-ui/themes';

const TripForm = ({buttonValue, title, actionTitle}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
		<Button>{buttonValue}</Button>
	</Dialog.Trigger>
      <Dialog.Content  align="center">
      <form className='w-full'>
        <h2 className="md:text-3xl text-2xl text-bold mb-6  font-bold">
        </h2>
        <Dialog.Title>{title}</Dialog.Title> 
        
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
          <Dialog.Close>
          <Button variant="soft" color="gray">
            Cancel
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button >
            {actionTitle}
            </Button>
        </Dialog.Close>
        </div>
      </form>
    
    </Dialog.Content>
    </Dialog.Root>
  );
};

export default TripForm;
