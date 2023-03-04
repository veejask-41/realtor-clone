import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button className="flex items-center w-full justify-center bg-red-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:shadow-lg hover:bg-red-700 active:bg-red-800 transition duration-150 ease-in-out">
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}
