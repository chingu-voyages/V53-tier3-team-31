import React from 'react';
import Image from "next/image";
import hotelImage from "@/assets/hotelimage.jpg"
import { Button, TextField, Card, Tooltip, IconButton } from "@radix-ui/themes";

function SearchResultCard() {
    return (
        <Card className="w-full max-w-sm shadow-lg rounded-2xl overflow-hidden my-4">
      <Image 
        src={hotelImage} 
        width={500} 
        height={300} 
     
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold ">Hotel Name </h3>
        <p >Best stay experience</p>
        <div className="mt-4 flex justify-end">
          <Tooltip content="Add">
          <IconButton radius="full">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </Card>
    );
}

export default SearchResultCard;