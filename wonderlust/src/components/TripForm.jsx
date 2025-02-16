import React, { useEffect, useState } from 'react';
import { Dialog, Button } from '@radix-ui/themes';
import FlashMessages from './FlashMessages';

const TripForm = ({
  buttonValue,
  title,
  actionTitle,
  action,
  id = '',
  tripInfo = '',
}) => {
  const [formData, setFormData] = useState({
    tripname: '',
    destination: '',
    startDay: '',
    endDay: '',
    budget: '',
    travellers: '',
  });
  const [isOpen, setIsOpen] = useState(false);
  const [flashMessage, setflashMessage] = useState('');
  const [flashMessageType, setflashMessageType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (action === 'edit') {
    useEffect(() => {
      setFormData({
        ...tripInfo,
        startDay: tripInfo.startDay.split('T')[0],
        endDay: tripInfo.endDay.split('T')[0],
      });
    }, []);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let method = '';
      if (action === 'new') method = 'POST';
      if (action === 'edit') method = 'PUT';

      const response = await fetch(`/api/trips/${action}`, {
        method: method,
        body: JSON.stringify({
          tripId: id,
          ...formData,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setIsOpen(false);
      } else {
        const errorData = await response.json();
        setflashMessage(
          errorData.message || 'Something went wrong. Please try again.'
        );
        setflashMessageType('error');
      }
    } catch (error) {
      setflashMessage('An error occurred. Please try again.');
      setflashMessageType('error');
    }
  };
  return (
    <Dialog.Root open={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
      <Dialog.Trigger>
        <Button>{buttonValue}</Button>
      </Dialog.Trigger>
      <Dialog.Content align="center">
        <form className="w-full">
          <h2 className="md:text-3xl text-2xl text-bold mb-6  font-bold"></h2>
          <Dialog.Title>{title}</Dialog.Title>
          <FlashMessages
            flashMessage={flashMessage}
            flashMessageType={flashMessageType}
          />
          <div className="flex-col flex gap-2 font-semibold ">
            Trip Name
            <input
              name="tripname"
              value={formData.tripname}
              onChange={handleChange}
              className="form-field outline-none border-none font-normal"
              type="text"
              style={{ backgroundColor: 'var(--gray-1)', color: '--gray-12' }}
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col gap-2 font-semibold ">
            Destination
            <input
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="form-field outline-none border-none font-normal "
              type="text"
              style={{ backgroundColor: 'var(--gray-1)', color: '--gray-12' }}
              placeholder="Enter your destination"
            />
          </div>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="flex flex-col gap-2 font-semibold sm:w-[47%] ">
              Start Date
              <input
                name="startDay"
                value={formData.startDay}
                onChange={handleChange}
                className="form-field outline-none border-none text-sm font-normal uppercase"
                type="date"
                style={{ backgroundColor: 'var(--gray-1)', color: '--gray-12' }}
                placeholder="mm/dd/yyyy"
              />
            </div>
            <div className="flex flex-col gap-2 font-semibold sm:w-[47%] ">
              End Date
              <input
                name="endDay"
                value={formData.endDay}
                onChange={handleChange}
                className="form-field outline-none border-none text-sm font-normal uppercase"
                type="date"
                style={{ backgroundColor: 'var(--gray-1)', color: '--gray-12' }}
                placeholder="mm/dd/yyyy"
              />
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="flex flex-col gap-2 font-semibold sm:w-[47%]">
              Budget
              <input
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="form-field outline-none border-none font-normal "
                type="text"
                style={{ backgroundColor: 'var(--gray-1)', color: '--gray-12' }}
                placeholder="$10000"
              />
            </div>
            <div className="flex flex-col gap-2 font-semibold  sm:w-[47%]">
              Travellers
              <input
                name="travellers"
                value={formData.travellers}
                onChange={handleChange}
                className="form-field outline-none border-none font-normal "
                type="text"
                style={{ backgroundColor: 'var(--gray-1)', color: '--gray-12' }}
                placeholder="0"
              />
            </div>
          </div>

          <div className=" flex gap-4 ml-auto mt-6">
            <Dialog.Close>
              <Button
                variant="soft"
                color="gray"
                style={{ backgroundColor: 'var(--gray-1)', color: '--gray-7' }}
              >
                Cancel
              </Button>
            </Dialog.Close>

            <Button onClick={handleSubmit}>{actionTitle}</Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default TripForm;
