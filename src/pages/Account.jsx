import React from "react";
import SavedShows from "../components/SavedShows";

function Account() {
  return (
    <>
      {" "}
      <div className="w-full text-white">
        <img
          className="  w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/76c10fc9-7ccd-4fbf-bc59-f16a468921ca/1c2743b4-68cd-4fa1-b730-b683517e09e3/TW-zh-20230529-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="absolute top-0 left-0 w-full h-[550px] bg-black/60"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Show</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
}

export default Account;
