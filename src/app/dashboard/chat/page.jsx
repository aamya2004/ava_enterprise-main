import Image from "next/image";
import Link from "next/link";
Link
const page = () => {
  return (
    <>
      <div className="flex flex-col h-full items-center  justify-center ">
        <div className="text-white  gap-8 items-center w-1/2 h-1/2 flex flex-col text-2xl font-bold">
          Pick the assistant you'd like to chat with
          <div className="flex flex-row gap-8">
            <div
              className="bg-white  h-60 w-48 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100
            flex flex-col items-center justify-center gap-4"
            >
                 <Image src="/Chat/Ira.jpg" alt = "Image" width={60} height={0} className="rounded-full w-20"></Image>

              Ira
              <button className="bg-slate-100 text-black text-sm px-4 py-2 rounded-lg hover:bg-indigo-900 hover:text-white hover:font-bold" asChild>
                <Link href="/dashboard/chat/Ira">Select</Link>
              </button>
            </div>
            <div
              className="bg-white  h-60 w-48 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100
            flex flex-col items-center justify-center gap-4"
            >
  
              <Image src="/Chat/Ira.jpg" alt = "Image" width={60} height={0} className="rounded-full w-20"></Image>
              Ira
              <button className="bg-slate-100 text-black text-sm px-4 py-2 rounded-lg hover:bg-indigo-900 hover:text-white hover:font-bold" asChild>
                <Link href="/dashboard/chat/Ira">Select</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
