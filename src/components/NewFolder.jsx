import React, { useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
const NewFolder = ({ onClose }) => {
  const hiddenFileInput = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = () => {
    if (hiddenFileInput.current.files && hiddenFileInput.current.files[0]) {
      setSelectedFile(hiddenFileInput.current.files[0]);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleFileInputChange = (event) => {
    handleChange();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="p-8 rounded-lg h-4/5 w-1/3 bg-stone-800 text-slate-200">
      <div className="flex justify-end">
          <IoClose
            onClick={onClose}
            className="text-slate-200 h-7 w-7 cursor-pointer"
          ></IoClose>
      </div>
        <form className="flex flex-col gap-4">
        
          <div className="flex flex-col gap-2">
            <label className="font-semibold">
              Add a title for your knowledge store
            </label>
            <input
              type="text"
              placeholder="For example: Lorem Ipsum"
              className="p-2 text-sm text-zinc-200 bg-transparent border-2 border-zinc-500 rounded-lg w-full h-10"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Add a description</label>
            <textarea
              placeholder="For example: Lorem Ipsum"
              className="p-2 text-sm text-zinc-200 bg-transparent border-2 border-zinc-500 rounded-lg w-full h-20 resize-none"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="font-semibold">Add your files</label>
            <div className="relative border-2 border-zinc-500 rounded-md h-52 ">
              {selectedFile && (
                <div className="text-sm text-gray-500">
                  {selectedFile.name}
                </div>
              )}
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleFileInputChange}
                accept="image/*"
                style={{ display: "none" }}
              />
              <div className="flex justify-center items-center h-full w-full ">
              <div className="flex flex-col justify-center items-center">
                <button
                  onClick={handleClick}
                  className="p-2 rounded-full text-zinc-500 hover:bg-slate-100 transition-colors"
                  aria-label="file upload"
                >
                  <FiPlus className="h-10 w-10 " />
                </button>
                  <p className="text-sm pt-4 text-zinc-500">You can add upto 10 files(.pdf,.docx,.xlsx)</p>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="flex justify-end pt-4 text-sm items-center gap-1">
        <div className="w-20 flex items-center gap-1 bg-black rounded-md px-2 hover:scale-110 transition-all duration-300 cursor-pointer">
        <MdCreateNewFolder className="h-8 w-8"/>
        Create</div>
        </div>
      </div>
    </div>
  );
};

export default NewFolder;
