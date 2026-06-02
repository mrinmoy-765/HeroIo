import { useEffect, useState } from "react";
import ratings from "../assets/ratings.png";
import downloads from "../assets/downloads.png";
import { toast } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setInstalledApps(apps);
    console.log(apps);
  }, []);

  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success("uninstallation successfull!");
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-600 text-center mt-7">
        Your Installed Apps
      </h1>
      <p className="text-md font-light text-gray-500 text-center mt-2 mb-8">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="max-w-4xl mx-auto space-y-2.5">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="card w-auto bg-base-100 card-sm shadow-sm"
          >
            <div className="card-body">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src={app.image} alt="" className="h-16 w-16" />

                  <div className="space-x-3">
                    <p className="font-semibold  text-lg">{app.title}</p>
                    <div className="flex gap-2.5">
                      <div className="flex justify-center items-center gap-0.5">
                        {" "}
                        <img src={downloads} alt="" className="h-3 w-3" />{" "}
                        {app.downloads}
                      </div>
                      <div className="flex justify-center items-center gap-0.5">
                        {" "}
                        <img src={ratings} alt="" className="h-3 w-3" />{" "}
                        {app.ratingAvg}
                      </div>
                      {app.size} MB
                    </div>
                  </div>
                </div>
                {/* button */}
                <button
                  className="btn btn-sm px-3.5 bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => handleUninstall(app.id)}
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Installation;
