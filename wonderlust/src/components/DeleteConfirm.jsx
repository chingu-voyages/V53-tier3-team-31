import React from 'react';
import { Dialog, Button } from '@radix-ui/themes';

const DeleteConfirm = ({buttonValue}) => {
    return (
       <Dialog.Root>
                <Dialog.Trigger>
                        <Button color="red">{buttonValue}</Button>
                  </Dialog.Trigger>
                        <Dialog.Content  align="center">
                            <Dialog.Title>Delete</Dialog.Title> 
                            <div>
                            Are you sure you want to delete ?
                            </div>
                            <div className="float-right">
                            <Dialog.Close>
                                      <Button variant="soft" color="gray" m= '2'>
                                        Cancel
                                      </Button>
                                    </Dialog.Close>
                                    <Dialog.Close>
                                      <Button color="red" m= '2' >
                                        Delete
                                        </Button>
                                    </Dialog.Close>
                                    </div>
                        </Dialog.Content>
                    
            </Dialog.Root>
    );
}

export default DeleteConfirm;