/** @format */

import React from "react";

import { Outlet } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import Header from "./Header/Header";
const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-left  ">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side " style={{ borderRight: "1px solid black" }}>
        <label
          for="my-drawer-2"
          className="drawer-overlay drawer-side "
        ></label>
        <ul className="menup-4 overflow-y-auto w-60 bg-gray-900 h-full py-10 ">
          <li className="flex justify-center mt-10">
            <CustomLink
              className=" px-14 py-3  w-full  text-white  rounded headerAnchor "
              to="/"
            >
              Dashboard
            </CustomLink>
          </li>
          <li className="flex justify-center mt-10">
            <CustomLink
              className=" px-12 py-3  w-full  text-white  rounded headerAnchor "
              to="/previewpage"
            >
              Preview Page
            </CustomLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
