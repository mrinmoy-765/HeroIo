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
      <h1 className="text-xl sm:text-2xl font-bold text-gray-600 text-center mt-6 sm:mt-7 px-4">
        Your Installed Apps
      </h1>
      <p className="text-sm sm:text-md font-light text-gray-500 text-center mt-2 mb-6 sm:mb-8 px-4">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="max-w-4xl mx-auto space-y-2.5 px-4">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="card w-auto bg-base-100 card-sm shadow-sm"
          >
            <div className="card-body">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 flex-1">
                  <img
                    src={app.image}
                    alt=""
                    className="h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0"
                  />

                  <div className="space-y-2 sm:space-y-1">
                    <p className="font-semibold text-base sm:text-lg">
                      {app.title}
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-2.5 text-xs sm:text-sm">
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
                      <span>{app.size} MB</span>
                    </div>
                  </div>
                </div>
                {/* button */}
                <button
                  className="btn btn-sm px-3.5 bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto"
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
