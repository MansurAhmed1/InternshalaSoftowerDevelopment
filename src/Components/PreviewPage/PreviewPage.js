/** @format */

import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
const PreviewPAGE = () => {
  const [events, setEvents] = useState([]);
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  useEffect(() => {
    fetch("https://hidden-anchorage-98570.herokuapp.com/event")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  console.log(events);
  return (
    <div className>
      {events.map((event, index) => (
        <div key={index}>
          <div>
            <img
              src={event.banner}
              className="w-full"
              style={{ height: "120px" }}
              alt="banner"
            />
          </div>
          <div className=" w-11/12 mx-auto pt-5 grid lg:grid-cols-2 grid-cols-1">
            <div className="">
              <p
                style={{ fontSize: "18px" }}
                className="bannerTitle  font-bold "
              >
                {event.eventName}
              </p>
              <p>{event.shortDescription}</p>
              <p style={{ fontSize: "18px" }} className="pt-8  font-bold">
                What will you get?
              </p>
              <p class="text-justify">{event.description}</p>
            </div>
            <div className="flex pt-5 lg:pt-0 justify-center lg:justify-end ">
              <div
                className="lg:w-6/12 w-11/12 bg-gray-200"
                style={{ height: "300px", borderRadius: "15px" }}
              >
                <div className="flex justify-center ">
                  <p
                    style={{ width: "100px", borderRadius: "10px" }}
                    className="flex py-2  -mt-2 flex-col bg-white items-center"
                  >
                    <p className="flex justify-center">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCalendar}
                        class="text-blue-700 h-5 w-5"
                      />
                    </p>
                    <p className="text-center">{event.date.split("-")[2]}</p>
                    <p className="text-center">
                      {months[event.date.split("-")[1] - 1]}
                    </p>
                  </p>
                </div>
                <p className="py-5 px-3">
                  <FontAwesomeIcon
                    icon={faClock}
                    class="text-blue-700 h-5 inline w-5"
                  />
                  <span className="ml-2">{event.time}</span>
                </p>
                <p className="py-2 px-3">
                  <FontAwesomeIcon
                    icon={faVideo}
                    class="text-blue-700 h-5 inline w-5"
                  />
                  <span className="ml-2">
                    {" "}
                    <a className="font-bold text-blue-700" href={event.link}>
                      Link
                    </a>
                  </span>
                </p>{" "}
                <p className="py-2 px-3">
                  <FontAwesomeIcon
                    icon={faDollar}
                    class="text-blue-700 inline h-5 w-5"
                  />{" "}
                  <span className="ml-2 text-green-500 font-bold">{event.price}</span>
                </p>
                <p className="py-2 px-3">Duration-{event.duration} Minute</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviewPAGE;
