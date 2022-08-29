/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Addevenet = () => {
  return (
    <div className="px-6 py-7">
      <h3 className="text-2xl">Welcome Ravi</h3>
      <p className="py-3">
       Please Create an event as soon as.
      </p>
      <Link to={"createEvent"}>
        {" "}
        <button className="border my-5 border-gray-500 rounded px-10 py-3 flex items-center">
          {" "}
          <img
            className="h-10 w-10 "
            src="https://iconarchive.com/download/i95384/iconsmind/outline/Add.ico"
            alt=""
          />{" "}
          <span className="ml-2">Add Event</span>{" "}
        </button>
      </Link>
    </div>
  );
};

export default Addevenet;
