import { BsFillPlusSquareFill } from "react-icons/bs";
const KnowledgeDatabase = () => {
  const database = [
    {
      date: "12 April 2024",
      title: "Lorem Ipsum",
      type: "Names",
      noOfEntries: 20,

    },
    {
      date: "12 April 2024",
      title: "Lorem Ipsum",
      type: "Names",
      noOfEntries: 20,

    },
    {
      date: "12 April 2024",
      title: "Lorem Ipsum",
      type: "Names",
      noOfEntries: 20,

    },

  ];

  return (
    <div className="h-40 flex flex-col gap-6 p-4">
    <div className="flex justify-between ">
      <h2 className="text-slate-200 font-bold text-md">Knowledge Database</h2>
      <BsFillPlusSquareFill className="text-white" />
    </div>
      <ul className="flex justify-center gap-16 bg-black  text-slate-200 p-2 rounded-md text-center">
        <div className="w-2/3"><li>Date</li></div>
        <div className="w-1/2"><li>Database title</li></div>
        <div className="w-1/2"><li>Database type</li></div>
        <div className="w-1/2"><li>No of entries</li></div>
      </ul>
      {database.length > 0 ? (
        <ul className="text-slate-200  text-sm flex flex-col gap-2 ">

          {database.map((database, index) => (
            <li key={index}>
              <div className="w-full h-full flex gap-48 justify-center items-center bg-transparent border-zinc-500 border-2 p-2 rounded-md">
                  <p>{database.date}</p>
                  <p>{database.title}</p>
                  <div className="bg-opacity-50 h-6 w-16 rounded-md  text-center">
                    <p className="text-black bg-yellow-200 rounded-md text-sm">{database.type}</p>
                  </div>
                  <p>{database.noOfEntries}</p>
                </div>
            </li>
          ))}
      
        </ul>
      ) : (
        <p>No integrated apps found</p>
      )}
    </div>
  );
};

export default KnowledgeDatabase;
