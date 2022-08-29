/** @format */

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateEvent = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const [loading, setLoadig] = useState(false);

  //////////////////imgbb api key////////////////////
  const imageStorageKey = "313f46331e565faeedd1d63a27279f2c";
  //// //////////////imgbb api key////////////////////

  const onSubmit = async (data) => {
    console.log(data);
    setLoadig(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    //img bb er example call theke nichi
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    fetch(url, {
      method: "POST",
      body: formData
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;

          const addEvent = {
            eventName: data.eventName,
            banner: img,
            shortDescription: data.shortDescription,
            description: data.description,
            language: data.language,
            time: data.time,
            duration: data.duration,
            date: data.date,
            link: data.link,
            price: data.price
          };
          console.log(addEvent);

          // send to your database

          const url = "https://hidden-anchorage-98570.herokuapp.com/addevent";
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(addEvent)
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("Event added successfully");
                setLoadig(false);
                reset();
              } else {
                toast("Failed to add Event");
              }
            });
        }
      });
  };

  // if (loading) {
  //   return <Loading></Loading>;
  // }

  return (
    <div className="w-11/12 mx-auto py-1">
      <ToastContainer></ToastContainer>
      <div className="flex justify-between pt-3 items-center">
        <div>
          <Link className="text-blue-700" to={"/"}>
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} />{" "}
            <span className="ml-1 font-semibold"> Back</span>
          </Link>
        </div>
        <div>
          <Link className="text-blue-700 " to={"/previewpage"}>
            {" "}
            <button
              style={{ borderRadius: "20px" }}
              className="text-red-600 border border-red-600  inline-block py-1 lg:px-12 px-2 "
            >
              Preview Page
            </button>
          </Link>
        </div>
      </div>
      <h3 className="text-2xl py-5 text-center lg:text-left  text-gray-600 font-semibold">
        {" "}
        Create Event
      </h3>

{
  loading ?<div style={{height:"50vh"}} className="flex justify-center items-center">
      <button class="btn loading">loading</button>
  </div>:<div><form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 grid-cols-1 ">
          <div className="flex flex-col  items-center lg:items-start">
            <div className="form-control  lg:items-start l w-3/4 ">
              {/* <label className="label">
                <span className="label-text text-gray-500">Event Name</span>
              </label> */}
              <input
                type="text"
                placeholder=" Enter Event Name"
                className="input input-bordered lg:w-3/4 w-full "
                {...register("eventName", {
                  required: {
                    value: true,
                    message: "Event Name is Required"
                  }
                })}
              />
              <label className="label">
                {errors.eventName?.type === "required" && (
                  <span className="label-text text-gray-500-alt text-red-500">
                    {errors.eventName.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control  lg:items-start l w-3/4 ">
              <label className="label">
                <span className="label-text text-left text-gray-500">
                  Banner
                </span>
              </label>
              <input
                type="file"
                className="input input-bordered lg:w-3/4 w-full "
                {...register("image", {
                  required: {
                    value: true,
                    message: "Banner is Required"
                  }
                })}
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text text-gray-500-alt text-red-500">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control  lg:items-start l w-3/4 ">
              {/* <label className="label">
                <span className="label-text text-gray-500">
                  Short Description
                </span>
              </label> */}
              <input
                type="text"
                placeholder=" Enter Short Description"
                className="input input-bordered lg:w-3/4 w-full"
                {...register("shortDescription", {
                  required: {
                    value: true,
                    message: "Short Descriptionis Required"
                  }
                })}
              />
              <label className="label">
                {errors.shortDescription?.type === "required" && (
                  <span className="label-text text-gray-500-alt text-red-500">
                    {errors.shortDescription.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control  lg:items-start l w-3/4 ">
              {/* <label className="label">
                <span className="label-text text-gray-500">Description</span>
              </label> */}

              <textarea
                className="border rounded  p-3 lg:w-3/4 w-full "
                placeholder="Please describe your service"
                cols="30"
                rows="4"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is Required"
                  }
                })}
              ></textarea>
              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="label-text text-gray-500-alt text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="lg:pl-28 lg:-mt-10   flex flex-col  items-center lg:items-start ">
            <div className="form-control  lg:items-start l w-3/4 ">
              <label className="label">
                <span className="label-text  text-gray-500">
                  Choose Language
                </span>
              </label>
              <select
                className="input input-bordered  lg:w-3/4 w-full "
                {...register("language", {
                  required: {
                    value: true,
                    message: "Language is Required"
                  }
                })}
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
              <label className="label">
                {errors.language?.type === "required" && (
                  <span className="label-text text-gray-500-alt text-red-500">
                    {errors.language.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control  lg:items-start l w-3/4 ">
              {/* <label className="label">
                <span className="label-text text-gray-500">
                  Price
                </span>
              </label> */}
              <input
                type="text"
                placeholder="Price (in INR)"
                className="input input-bordered lg:w-3/4 w-full "
                {...register("price", {
                  required: {
                    value: true,
                    message: "price is Required"
                  }
                })}
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text text-gray-500-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control  lg:items-start l w-3/4 ">
              <label className="label">
                <span className="label-text text-gray-500">time</span>
              </label>

              <select
                className="input input-bordered  lg:w-3/4 w-full "
                {...register("time", {
                  required: {
                    value: true,
                    message: "Time is Required"
                  }
                })}
              >
                <option value="1:00 pm">1:00 pm</option>
                <option value="2:00 pm">2:00pm</option>
                <option value="3:00 pm">3:00 pm</option>
                <option value="4:00 pm">4:00pm</option>
                <option value="5:00 pm">5:00 pm</option>
                <option value="6:00 pm">6:00pm</option>
                <option value="7:00 pm">7:00 pm</option>
                <option value="8:00 pm">8:00pm</option>
                <option value="9:00 pm">9:00 pm</option>
                <option value="10:00 pm">10:00pm</option>
                <option value="11:00 pm">11:00 pm</option>
                <option value="12:00 pm">12:00 pm</option>
                <option value="1:00 pm">1:00am</option>
                <option value="2:00 am">2:00 am</option>
                <option value="3:00 am">3:00 am</option>
                <option value="4:00 am">4:00 am</option>
                <option value="5:00 am">5:00 am</option>
                <option value="6:00 am">6:00 am</option>
                <option value="7:00 am">7:00 am</option>
                <option value="8:00 am">8:00 am</option>
                <option value="9:00 am">5:00 am</option>
                <option value="10:00 am">6:00 am</option>
                <option value="12:00 am">7:00 am</option>
              </select>
              <label className="label">
                {errors.time?.type === "required" && (
                  <span className="label-text text-gray-500-alt text-red-500">
                    {errors.time.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control  lg:items-start l w-3/4 ">
              {/* <label className="label">
                <span className="label-text text-gray-500">Duration</span>
              </label> */}
              <input
                type="number"
                placeholder="Duration (in Minutes)"
                className="input input-bordered lg:w-3/4 w-full "
                {...register("duration", {
                  required: {
                    value: true,
                    message: "Minitue is Required"
                  }
                })}
              />
              <label className="label">
                {errors.duration?.type === "required" && (
                  <span className="label-text text-gray-500-alt text-red-500">
                    {errors.duration.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control  lg:items-start l w-3/4 ">
              {/* <label className="label">
                <span className="label-text text-gray-500">Date</span>
              </label> */}
              <input
                type="date"
                //    value={user?.email}

                placeholder="Enter Date"
                className="input input-bordered lg:w-3/4 w-full "
                {...register("date", {
                  required: {
                    value: true,
                    message: "date is Required"
                  }
                })}
              />
              <label className="label">
                {errors.date?.type === "required" && (
                  <span className="label-text text-gray-500-alt text-red-500">
                    {errors.date.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control  lg:items-start l w-3/4 ">
              {/* <label className="label">
                <span className="label-text text-gray-500">Event Link</span>
              </label> */}
              <input
                type="text"
                placeholder=" Enter Event Link"
                className="input input-bordered lg:w-3/4 w-full "
                {...register("link", {
                  required: {
                    value: true,
                    message: "Link is Required"
                  }
                })}
              />
              <label className="label">
                {errors.link?.type === "required" && (
                  <span className="label-text text-gray-500-alt text-red-500">
                    {errors.link.message}
                  </span>
                )}
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10">
          <input
            type="submit"
            style={{ borderRadius: "20px" }}
            className="bg-red-600 inline-block py-2 font-semibold  px-24 text-white"
            value="Save"
          />
        </div>
      </form></div>
}

   



    </div>
  );
};

export default CreateEvent;
