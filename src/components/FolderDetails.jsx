import React from "react";
import { IoClose } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import FilesData from "./FilesData";
import { BiSolidSave } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai"; 

const FolderDetails = ({ folder, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="p-10 rounded-lg h-4/5 w-1/3 bg-stone-800 text-slate-200 ">
        <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <p className="text-2xl font-bold">{folder.title}</p>
          <AiFillEdit className="h-6 w-6" />
        </div>
          <IoClose
            onClick={onClose}
            className="text-slate-200 h-7 w-7 cursor-pointer"
          ></IoClose>
        </div>
        <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <div className="py-4">Description</div>
          <AiFillEdit />
        </div>
          <div className="text-xs text-justify text-zinc-400">
            {folder.additionalInfo}
          </div>
        </div>
        <div className="pt-4">
          <p>Files</p>
          <div className="">
            <FilesData />
          </div>
          <div className="border-zinc-500 border-2 h-16  rounded-md w-full flex justify-center items-center hover:scale-110 transition-all duration-300">
            <FiPlus className="h-8 w-8 text-zinc-500" />
          </div>
        </div>
        <div className="flex justify-end gap-4 pt-6">
          <div className="flex  items-center justify-center bg-black rounded-md px-2 py-1 cursor-pointer hover:scale-110 transition-all duration-300">
            <MdDelete className="text-red-400" />
            Delete
          </div>
          <div className="flex items-center justify-center bg-black rounded-md px-2 py-1 cursor-pointer hover:scale-110 transition-all duration-300">
          <BiSolidSave className="text-green-300" />
            Save
          </div>
        </div>

        {/* <p>No of Files: {folder.noOfFiles}</p>
        <p>Additional Info: {folder.additionalInfo}</p> */}
      </div>
    </div>
  );
};

export default FolderDetails;
