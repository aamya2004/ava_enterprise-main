import Image from "next/image";
import { Input } from "@/components/ui/input";
import { LuSendHorizonal } from "react-icons/lu";
import { IoCameraOutline } from "react-icons/io5";
import { FiMic } from "react-icons/fi";
import { GrAttachment } from "react-icons/gr";
const page = () => {
  return (
    <>
      <div className="h-full w-full  flex flex-col items-center">
        <div
          className="bg-white h-14 w-32 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100
      
            flex  items-center justify-center gap-3"
        >
                 <Image src="/Chat/Ira.jpg" alt = "Image" width={50} height={0} className="rounded-full w-10"></Image>

          <div className="text-white text-2xl font-bold">Ira</div>
        </div>
        <div className="flex flex-col h-full w-full items-center justify-center gap-4">
          <Image
            src="/Chat/logo2.png"
            width={100}
            height={100}
            alt = "Image"
          ></Image>
          <p className="text-slate-500 text-2xl">How was your day?</p>
        </div>
        <div className="w-full flex flex-row justify-end items-center gap-6">
         <GrAttachment className="text-slate-300 h-7 w-7" />
          <div className=" justify-end relative w-11/12">
            <Input
              type="text"
              placeholder="Let's begin the magic ask a question"
              className="w-full h-14 bg-transparent border-slate-400 rounded-lg text-white text-lg px-6 pl-6"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 gap-6">
              <FiMic className="text-slate-300 h-6 w-6" />
              <IoCameraOutline className="text-slate-300 h-7 w-7" />
              <LuSendHorizonal className="text-slate-300 h-6 w-6" />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
