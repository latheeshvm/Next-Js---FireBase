import React from "react";

export default function Loader(props: any) {
  return (
    <div className="top-0 fixed h-full w-full opacity-90 bg-slate-900">
      <div className="absolute flex h-full w-full justify-center items-center flex flex-col">
        <svg
          className="animate-spin -ml-1 mr-3 h-32 w-32 text-blue-200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity"
            cx="12"
            cy="12"
            r="5"
            stroke="currentColor"
            strokeWidth="1"
          ></circle>
          <path
            className="opacity"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <div className="text-blue-500 font-thin text-4xl mt-10 animate-pulse">
          {props.text}
        </div>
      </div>
    </div>
  );
}
