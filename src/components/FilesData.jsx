import { Colors } from "chart.js";
import Image from "next/image";
import { BsFillPlusSquareFill } from "react-icons/bs";
const FilesData = () => {
  const database = [
    {
      date: "12 April 2024",
      title: "Lorem Ipsum",
      type: ".pdf",
      noOfEntries: 20,

    },
    {
      date: "12 April 2024",
      title: "Lorem Ipsum",
      type: ".xlsx",
      noOfEntries: 20,

    },
    {
      date: "12 April 2024",
      title: "Lorem Ipsum",
      type: ".docx",
      noOfEntries: 20,

    },

  ];

  return (
    <div className="h-40  w-full  flex flex-col gap-6 ">

        <ul className="text-slate-300  text-sm flex flex-col gap-2 pt-2">

          {database.map((database, index) => (
            <li key={index}>
              <div className=" flex  justify-between items-center bg-transparent border-zinc-500 border-2 p-2 rounded-md hover:scale-110 transition-all duration-300">
                  <p>{database.date}</p>
                  <p>{database.title}</p>
                  <div className="bg-opacity-50 h-6 w-16 rounded-md  text-center">
                    <p className="text-black bg-yellow-200 rounded-md text-sm">{database.type}</p>
                  </div>
                </div>
            </li>
          ))}
      
        </ul>
    </div>
  );
};

export default FilesData;
