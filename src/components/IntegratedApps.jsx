import Image from "next/image";

const IntegratedApps = () => {
  const apps = [
    {
      logo: "/Dashboard/github2.png",
      name: "App 1",
      status: "Active",
    },
    {
      logo: "/Dashboard/github2.png",
      name: "App 1",
      status: "Active",
    },
    {
      logo: "/Dashboard/github2.png",
      name: "App 1",
      status: "Active",
    },
    {
      logo: "/Dashboard/github2.png",
      name: "App 1",
      status: "Active",
    },
  ];

  return (
    <div className="h-40 flex flex-col gap-4 p-4">
      <h2 className="text-slate-200 font-bold text-md">Integrated Apps</h2>
      {apps.length > 0 ? (
        <ul className="text-slate-200  text-sm flex flex-col gap-4">

          {apps.map((app, index) => (
            <li key={index}>
              <div className="w-full h-full flex  gap-20 items-center bg-black p-2 rounded-md">
                  <Image src={app.logo} width={24} height={24}></Image>
                  <p>{app.name}</p>
                  <div className="bg-green-600 bg-opacity-50 h-6 w-16 rounded-md  text-center">
                    <p className="text-green-300">{app.status}</p>
                  </div>
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

export default IntegratedApps;
