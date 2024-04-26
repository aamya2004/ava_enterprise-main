"use client";
import FolderDetails from "@/components/FolderDetails";
import NewFolder from "@/components/NewFolder";
import React, { useState } from "react";
import { FaFolder } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
const Page = () => {
    const folderData = [
      {
        title: "Lorem Ipsum 1",
        noOfFiles: 20,
        additionalInfo: "Folder 1 description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "Lorem Ipsum 2",
        noOfFiles: 15,
        additionalInfo: "Folder 2 description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",

      },
      {
        title: "Lorem Ipsum 3",
        noOfFiles: 10,
        additionalInfo: "Folder 3 description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
      },
    ];
  
    const colors = ["#dcd0ef", "#feecd2", "#bdd7ff"];
    const colors1 = ["#c4a9fa", "#FFDCAA", "#98C1FF"];
    const colorsIcons = ["#8D57F6", "#FFB245", "#4B8BEF"];
  
    const [selectedFolder, setSelectedFolder] = useState(null);
    const [createNewFolder, setCreateNewFolder] = useState(false);

    const handleCreate = () =>{
      setCreateNewFolder(true);
    }
  
    const handleFolderClick = (index) => {
      setSelectedFolder(folderData[index]);
    };
  
    const closeBox = () => {
      setSelectedFolder(null);
      {createNewFolder ? setCreateNewFolder(false) : <></>}
    };
  
    return (
      <>
        <div>
          <div className="text-slate-200 text-xl font-bold">
            Your knowledge store
          </div>
          <div>
            <div className="flex gap-10 pt-8 ">
              {folderData.map((folder, index) => (
                <div
                  key={index}
                  className="w-44 h-36 text-white rounded-xl hover:scale-110 transition-all duration-300 cursor-pointer"
                  style={{ backgroundColor: colors[index % colors.length] }}
                  onClick={() => handleFolderClick(index)}
                >
                  <div className="flex flex-col h-full w-full items-center justify-end gap-6">
                    <div
                      className="rounded-full w-14 h-14 flex justify-center items-center"
                      style={{ backgroundColor: colors1[index % colors1.length] }}
                    >
                      <FaFolder
                        className="w-7 h-7"
                        style={{ color: colorsIcons[index % colorsIcons.length] }}
                      />
                    </div>
                    <div className="flex gap-14 text-xs pb-3 font-semibold" style={{ color: colorsIcons[index % colorsIcons.length] }}>
                      <p>{folder.title}</p>
                      <p>{folder.noOfFiles}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div onClick={handleCreate} className="w-44 h-36 text-white border-zinc-500 border-2 rounded-xl flex justify-center items-center hover:scale-110 transition-all duration-300">
                <FiPlus  className="h-10 w-10 text-zinc-500" />
              </div>
            </div>
          </div>
        </div>
        {selectedFolder && (
          <FolderDetails folder={selectedFolder}  onClose={closeBox} />
        )}
        {createNewFolder && (
          <NewFolder onClose = {closeBox} />
        )}
      </>
    );
  };
  
  export default Page;