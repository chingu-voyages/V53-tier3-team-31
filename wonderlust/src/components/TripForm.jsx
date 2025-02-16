import React, { useEffect, useState } from "react";
import { Dialog, Button } from "@radix-ui/themes";
import FlashMessages from "./FlashMessages";

const TripForm = ({ buttonValue, title, actionTitle, action, id = "", tripInfo = "" }) => {
  const [formData, setFormData] = useState({
    tripname: "",
    destination: "",
    startDay: "",
    endDay: "",
    budget: "",
    travellers: "",
  });

  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [flashMessage, setflashMessage] = useState("");
  const [flashMessageType, setflashMessageType] = useState("");

  useEffect(() => {
    if (action === "edit" && tripInfo) {
      setFormData({
        ...tripInfo,
        startDay: tripInfo.startDay?.split("T")[0] || "",
        endDay: tripInfo.endDay?.split("T")[0] || "",
      });
    }
  }, [tripInfo, action]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" }); // Clear errors on input change
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.tripname) newErrors.tripname = "Trip name is required";
    if (!formData.destination) newErrors.destination = "Destination is required";
    if (!formData.startDay) newErrors.startDay = "Start date is required";
    if (!formData.endDay) newErrors.endDay = "End date is required";
    if (!formData.budget || isNaN(formData.budget)) newErrors.budget = "Budget must be a valid number";
    if (!formData.travellers || isNaN(formData.travellers)) newErrors.travellers = "Travellers must be a valid number";
    
    if (new Date(formData.startDay) > new Date(formData.endDay)) {
      newErrors.endDay = "End date must be after start date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop if validation fails

    try {
      let method = action === "new" ? "POST" : "PUT";
      const response = await fetch(`/api/trips/${action}`, {
        method,
        body: JSON.stringify({ tripId: id, ...formData }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setIsOpen(false);
      } else {
        const errorData = await response.json();
        setflashMessage(errorData.message || "Something went wrong. Please try again.");
        setflashMessageType("error");
      }
    } catch (error) {
      setflashMessage("An error occurred. Please try again.");
      setflashMessageType("error");
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger>
        <Button>{buttonValue}</Button>
      </Dialog.Trigger>
      <Dialog.Content align="center">
        <form className="w-full" onSubmit={handleSubmit}>
          <Dialog.Title>{title}</Dialog.Title>
          <FlashMessages flashMessage={flashMessage} flashMessageType={flashMessageType} />

          {/* Trip Name */}
          <div className="flex-col flex gap-2 font-semibold text-gray-600">
            Trip Name
            <input name="tripname" value={formData.tripname} onChange={handleChange} className="form-field" type="text" placeholder="Name" />
            {errors.tripname && <span className="text-red-500">{errors.tripname}</span>}
          </div>

          {/* Destination */}
          <div className="flex-col flex gap-2 font-semibold text-gray-600">
            Destination
            <input name="destination" value={formData.destination} onChange={handleChange} className="form-field" type="text" placeholder="Enter your destination" />
            {errors.destination && <span className="text-red-500">{errors.destination}</span>}
          </div>

          {/* Start & End Dates */}
          <div className="flex justify-between flex-col md:flex-row">
            <div className="flex flex-col gap-2 font-semibold sm:w-[47%] text-gray-600">
              Start Date
              <input name="startDay" value={formData.startDay} onChange={handleChange} className="form-field" type="date" />
              {errors.startDay && <span className="text-red-500">{errors.startDay}</span>}
            </div>
            <div className="flex flex-col gap-2 font-semibold sm:w-[47%] text-gray-600">
              End Date
              <input name="endDay" value={formData.endDay} onChange={handleChange} className="form-field" type="date" />
              {errors.endDay && <span className="text-red-500">{errors.endDay}</span>}
            </div>
          </div>

          {/* Budget & Travellers */}
          <div className="flex justify-between flex-col md:flex-row">
            <div className="flex flex-col gap-2 font-semibold sm:w-[47%] text-gray-600">
              Budget
              <input name="budget" value={formData.budget} onChange={handleChange} className="form-field" type="text" placeholder="$10000" />
              {errors.budget && <span className="text-red-500">{errors.budget}</span>}
            </div>
            <div className="flex flex-col gap-2 font-semibold sm:w-[47%] text-gray-600">
              Travellers
              <input name="travellers" value={formData.travellers} onChange={handleChange} className="form-field" type="text" placeholder="0" />
              {errors.travellers && <span className="text-red-500">{errors.travellers}</span>}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 ml-auto mt-6">
            <Dialog.Close>
              <Button variant="soft" color="gray">Cancel</Button>
            </Dialog.Close>
            <Button type="submit">{actionTitle}</Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default TripForm;
