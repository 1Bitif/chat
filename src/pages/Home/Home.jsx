import React, { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Make sure to import the styles
import { Typography, Button, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react"; // Adjust imports as per your setup

const CODES = {
  US: "+1",
  CA: "+1",
  // Add more countries and their codes here
};

const COUNTRIES = ["US", "CA"]; // Add more countries as needed
export const Home = () => {
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("US");
    
    return (
        <div className="w-full mt-16 mx-16 flex justify-center">
        {/* <Typography variant="small" color="blue-gray" className="mb-1 font-medium">
          Enter Phone Number
        </Typography> */}
        <div className="relative flex w-full">
         
          <PhoneInput
            country={country.toLowerCase()} 
            value={phone}
            onChange={setPhone} 
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
            inputClass="!border-t-blue-gray-200 placeholder:text-blue-gray-300 focus:!border-primary" // Adjust input styles
          />
        </div>
      </div>
    );
};

