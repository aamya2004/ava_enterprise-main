import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import FilesData from "./FilesData";
import { BiSolidSave } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";

const CreateAssistant = ({ folder, onClose }) => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (event) => {
    const selectedFile = event.target.files[0];
    setProfilePicture(selectedFile);
  };

  const handleAddPictureClick = () => {
    document.getElementById("profilePictureInput").click();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="p-8 rounded-lg h-5/6 w-1/3 bg-stone-800 text-slate-200 ">
      <div className="flex justify-end">

      <IoClose
            onClick={onClose}
            className="text-slate-200 h-7 w-7 cursor-pointer"
          ></IoClose>
      </div>
        <div className="flex justify-center">
          {/* Profile Picture Circle */}
          <div className="relative">
            <div
              className="w-28 h-28 rounded-full border-2 border-zinc-400 flex justify-center items-center relative overflow-hidden"
              style={{ cursor: "pointer" }}
              onClick={handleAddPictureClick}
            >
              {profilePicture ? (
                <img
                  src={URL.createObjectURL(profilePicture)}
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>
            <FiPlus
              className="text-4xl bg-zinc-500 rounded-full text-zinc-100 absolute cursor-pointer bottom-4 left-3/4 transform -translate-x-1/2 translate-y-1/2"
              onClick={handleAddPictureClick}
            />
            <input
              type="file"
              id="profilePictureInput"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="hidden"
            />
          </div>
        </div>
        <div className="flex flex-col pt-4 gap-2">
          <p className="text-sm font-semibold">Name your assistant</p>
          <input
            type="text"
            className="bg-transparent border-2 border-zinc-500 rounded-md pt-2 text-sm"
          ></input>
        </div>
        <div className="flex flex-col pt-4 gap-2">
          <p className="text-sm font-semibold">Add bio for your assistant</p>
          <textarea
            type="text"
            className="bg-transparent border-2 border-zinc-500 rounded-md  h-20 overflow-hidden text-sm"
          ></textarea>
        </div>
        <div className="flex flex-col pt-4 gap-2">
          <p className="text-sm font-semibold">Select Language</p>
          <div className="flex gap-3 flex-wrap  justify-center cursor-pointer">
            <div
              className="w-24 h-8 text-slate-100 font-semibold text-md hover:scale-110 transition-all duration-300
          flex flex-col gap-4  p-4 rounded-lg
          backdrop  bg-opacity-10 justify-center items-center bg-gradient-to-b from-violet-400 to-violet-300 backdrop-blur-md border border-slate-500 shadow-lg "
            >
              <p className="text-xs text-slate-200">Hindi</p>
            </div>
            <div
              className="w-24 h-8 text-slate-100 font-semibold text-md hover:scale-110 transition-all duration-300
          flex flex-col gap-4  p-4 rounded-lg
          backdrop  bg-opacity-10 justify-center items-center bg-gradient-to-b from-sky-500 to-sky-600 backdrop-blur-md border border-slate-500 shadow-lg "
            >
              <p className="text-xs text-slate-200">English</p>
            </div>
            <div
              className="w-24 h-8 text-slate-100 font-semibold text-md  hover:scale-110 transition-all duration-300
          flex flex-col gap-4  p-4 rounded-lg
          backdrop  bg-opacity-10 justify-center items-center bg-gradient-to-b from-pink-400 to-pink-300 backdrop-blur-md border border-slate-500 shadow-lg "
            >
              <p className="text-xs text-slate-200">Tamil</p>
            </div>
            <div
              className="w-24 h-8 text-slate-100 font-semibold text-md hover:scale-110 transition-all duration-300
          flex flex-col gap-4 justify-center items-center  p-4 rounded-lg
          backdrop  bg-opacity-10 bg-gradient-to-b from-amber-400 to-amber-300 backdrop-blur-md border border-slate-500 shadow-lg "
            >
              <p className="text-xs text-slate-200">Marathi</p>
            </div>
            <div
              className="w-24 h-8 text-slate-100 font-semibold text-md hover:scale-110 transition-all duration-300
          flex flex-col justify-center items-center gap-4  p-4 rounded-lg
          backdrop  bg-opacity-10 bg-gradient-to-b from-pink-600 to-pink-500 backdrop-blur-md border border-slate-500 shadow-lg "
            >
              <p className="text-xs text-slate-200">Gujrati</p>
            </div>
            <div
              className="w-24 h-8 text-slate-100 font-semibold text-md hover:scale-110 transition-all duration-300
          flex flex-col justify-center gap-4  p-4 rounded-lg bg-transparent border-2  border-zinc-500"
            >
              <p className="text-xs text-zinc-400">Add Other</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssistant;
