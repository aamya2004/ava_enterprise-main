"use client";
import generateRandomData from "@/components/apiHits";
import BarGraph from "@/components/apiHitsGraph";
import IntegratedApps from "@/components/IntegratedApps";
import PerformanceGraph from "@/components/performanceGraph";
import KnowledgeDatabase from "@/components/knowledgeDatabase";

const page = () => {
  const randomData = generateRandomData();
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
  };
  return (
    <>
      <div className="flex flex-col gap-4 h-full w-full ">
      <div className="flex justify-between">
        <div className="text-slate-200 font-bold text-start text-2xl">
          Overview
        </div>
        <select
          className="w-40 h-10 text-slate-200 bg-transparent border-slate-400 border-2 rounded-md p-2"
          onChange={handleSelectChange}
        >
          <option value="Ira" className="text-black">Ira</option>
          <option value="Default" className="text-black">Default</option>
        </select>
      </div>
        <div className="w-full h-full flex gap-6">
          <div className="w-[340px] h-[305px] text-slate-100 font-semibold text-md 
          flex flex-col gap-4  p-4 rounded-lg
          backdrop  bg-opacity-10 bg-gradient-to-b from-gray-500/50 to-gray-900/50 backdrop-blur-md border border-slate-500 shadow-lg ">
            Api hits this week
            <BarGraph />
          </div>
          <div className="w-[600px] h-[305px] bg-gray-900 rounded-lg p-4 text-slate-200 font-bold
           backdrop  bg-opacity-10 bg-gradient-to-b from-gray-500/50 to-gray-900/50 backdrop-blur-md border border-slate-500 shadow-lg ">
            Performance
            <PerformanceGraph />
          </div>
          <div className="bg-gray-900 rounded-lg p-4 text-slate-200 font-bold w-full
           backdrop  bg-opacity-10 bg-gradient-to-b from-gray-500/50 to-gray-900/50 backdrop-blur-md border border-slate-500 shadow-lg">
          </div>
        </div>
        <div className="w-full h-full flex gap-7">
          <div className="w-1/3 h-full  bg-gray-900 rounded-lg  backdrop  bg-opacity-10 bg-gradient-to-b from-gray-500/50 to-gray-900/50 backdrop-blur-md border border-slate-500 shadow-lg ">
            <IntegratedApps />
          </div>
          <div className="w-full h-full  bg-gray-900 rounded-lg  backdrop  bg-opacity-10 bg-gradient-to-b from-gray-500/50 to-gray-900/50 backdrop-blur-md border border-slate-500 shadow-lg ">
              <KnowledgeDatabase / >
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
