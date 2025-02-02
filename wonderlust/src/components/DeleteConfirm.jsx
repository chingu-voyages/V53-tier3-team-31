import React, {useState} from 'react';
import { Dialog, Button } from '@radix-ui/themes';
import FlashMessages from "./FlashMessages"

const DeleteConfirm = ({buttonValue, id}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [flashMessage, setflashMessage] = useState("");
  const [flashMessageType, setflashMessageType] = useState("");

    const handleDelete = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("/api/trips/delete", {
          method: "DELETE",
          body: JSON.stringify({
            "tripId": id
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          setIsOpen(false)
        }
        else {
          const errorData = await response.json();
          setflashMessage(
            errorData.message || "Something went wrong. Please try again."
          );
          setflashMessageType("error");
        }
      }
      catch (error) {
        setflashMessage("An error occurred. Please try again.");
        setflashMessageType("error");
      }
    }

    return (
       <Dialog.Root open={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
                <Dialog.Trigger>
                        <Button color="red">{buttonValue}</Button>
                  </Dialog.Trigger>
                        <Dialog.Content  align="center">
                            <Dialog.Title>Delete</Dialog.Title> 
                            <FlashMessages flashMessage={flashMessage} flashMessageType={flashMessageType}/>
                            <div>
                            Are you sure you want to delete ?
                            </div>
                            <div className="float-right">
                            <Dialog.Close>
                                      <Button variant="soft" color="gray" m= '2'>
                                        Cancel
                                      </Button>
                                    
                                    </Dialog.Close>
                                      <Button color="red" m= '2' onClick={handleDelete}>
                                        Delete
                                        </Button>
                                    
                                    </div>
                        </Dialog.Content>
                    
            </Dialog.Root>
    );
}

export default DeleteConfirm;