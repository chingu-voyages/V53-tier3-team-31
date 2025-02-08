import React, {useState} from 'react';


function FlashMessages({flashMessage,flashMessageType}) {

    return (
        <div>
            {flashMessage && (
          <div
            className={`mb-4 p-2 text-center rounded-md 
            ${
              flashMessageType === "success"
                ? "bg-green-200 text-green-700"
                : "bg-red-200 text-red-700"
            }`}
          >
            {flashMessage}
          </div>
        )}
        </div>
    );
}

export default FlashMessages;