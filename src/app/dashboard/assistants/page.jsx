"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { RiChatNewLine } from "react-icons/ri";
import { ImEmbed2 } from "react-icons/im";
import CreateAssistant from "@/components/CreateAssistant";
const Page = () => {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [addAssistant,setAddAssistant] = useState(false);

  const handleOnClick2 = () => {
    setIsShown1(true);
  };

  const handleAddAssistant = () =>{
    setAddAssistant(true);
  }
  const closeBox = () => {
    setAddAssistant(false);
  };

  return (
    <>
      <div className="relative">
        <p className="text-xl font-bold text-slate-200">
          Explore and create your own assistants
        </p>
        <div className="flex flex-row gap-8 pt-10">
          <div
            className="bg-white hover:border-sky-500
          h-48 w-40 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 flex flex-col items-center justify-center gap-4 text-slate-200 text-xl font-bold hover:scale-110 transition-all duration-300"
          >
            <div className="absolute right-4 top-4">
              {/* <IoMdInformationCircleOutline></IoMdInformationCircleOutline> */}
            </div>
            <Image
              src="/Chat/Ira.jpg"
              width={60}
              height={0}
              className="rounded-full w-18"
            ></Image>
            Ira
            <div className="flex gap-16 items-center">
              <RiChatNewLine className="cursor-pointer  h-6 w-6 hover:scale-125 transition-all duration-300 hover:text-sky-600 ">
                <Link className="" href="/dashboard/chat">
                </Link>
              </RiChatNewLine>
            
              <ImEmbed2 className="cursor-pointer h-6 w-6 hover:scale-125 transition-all duration-300 hover:text-sky-600">
                <Link className="" href="/dashboard/chat">
                </Link>
              </ImEmbed2>
            </div>
          </div>
          <div className="bg-white hover:border-sky-500 h-48 w-40  rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 flex flex-col items-center justify-center gap-4 text-slate-200 text-xl font-bold hover:scale-110 transition-all duration-300">
            <div className="absolute right-4 top-4">
              {/* <IoMdInformationCircleOutline onClick={handleOnClick2} className="cursor-pointer" /> */}
            </div>
            <Image
              src="/Chat/Ira.jpg"
              width={60}
              height={0}
              className="rounded-full w-18"
            ></Image>
            Ira
            <div className="flex gap-16 items-center">
              <RiChatNewLine className="cursor-pointer  h-6 w-6 hover:scale-125 transition-all duration-300 hover:text-sky-600 ">
                <Link className="" href="/dashboard/chat">
                </Link>
              </RiChatNewLine>
            
              <ImEmbed2 className="cursor-pointer h-6 w-6 hover:scale-125 transition-all duration-300 hover:text-sky-600">
                <Link className="" href="/dashboard/chat">
                </Link>
              </ImEmbed2>
            </div>
           
          
          </div>
          <div className="bg-white h-48 w-40 rounded-2xl bg-clip-padding
           backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 flex flex-col items-center 
           justify-center gap-4 text-slate-200 text-xl font-bold hover:scale-110 transition-all duration-300
           cursor-pointer" onClick={handleAddAssistant}>
            <CiCirclePlus className="h-20 w-20 text-slate-300 " />
          </div>
        </div>
        {
          addAssistant && (<CreateAssistant onClose = {closeBox} />)
        }
      </div>
    
    </>
  );
};

export default Page;
