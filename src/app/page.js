import SignInCard from "@/components/ui/SignInCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen flex items-center bg-black"> {/* Add overflow-hidden */}
    <div className="w-full h-full  flex items-center ">
      <div className="absolute  bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-black to-black
      w-9/12 h-5/6 text-white flex flex-col items-center justify-center">
       <Image src="/Login/logo.png" width={400} height={400} />  
      </div>
    </div>
      <div className="absolute h-screen w-4/12 right-0 bg-gradient-to-b from-slate-900 to-indigo-900 xl:w-1/4">
        <SignInCard />
        {/* <Image src="/Login/SignUpBgDark.png" width={567} height={600} /> */}
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-around">
        <div className="w-full md:w-3/5 lg:w-2/5 xl:w-1/3">
          {/* <div className="mx-[-200px]"> {/* Adjust the margin here */}
            {/* <Image src="/Login/logo.png" width={389} height={286} /> */}
          {/* </div> */} 
        {/* </div> */}
      {/* // </div> */} 
    </div>
  );
}
