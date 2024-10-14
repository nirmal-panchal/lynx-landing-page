import React from "react";
import Landing from "./components/landing";
import Sidebar from "./components/sidebar";

const page = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex items-center w-full justify-center">
        <Landing />
      </div>
    </div>
  );
};

export default page;
