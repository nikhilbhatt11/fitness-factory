import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className=" h-screen flex items-center justify-center ">
      <div className="bg-gray-200 border rounded-md p-16 flex-row items-center">
        <h1 className="text-5xl font-bold my-4"> RAJAN FITNESS FACTORY</h1>
        <span className="text-white text-lg border rounded-md bg-red-300 px-2 mr-2">
          <Link to="/RegisterNow">Register Now</Link>
        </span>
        <span className="text-white text-lg border rounded-md bg-red-300 px-2">
          <Link to="/RegisterNow">Equipments</Link>
        </span>
        <span className="text-white text-lg border rounded-md bg-red-300 px-2 ml-2">
          <Link to="/RegisterNow">Supplements & Accesories</Link>
        </span>
      </div>
    </div>
  );
}

export default MainPage;
