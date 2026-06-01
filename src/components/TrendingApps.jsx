import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import download from "../assets/downloads.png";

const TrendingApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  const displayApps = apps.slice(0, 8);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-600 text-center mt-7">
        Trending Apps
      </h1>
      <p className="text-md font-light text-gray-500 text-center mt-2 mb-8">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-4 gap-6 px-6 mb-8">
        {displayApps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />

            <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
              {app.title}
            </h3>

            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-1">
                <img src={download} className="w-4 h-4" alt="" />
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium"></span>{" "}
                  {app.downloads.toLocaleString()}
                </p>
              </div>

              <p className="text-sm text-gray-600">
                <span className="font-medium"></span> ⭐ {app.ratingAvg}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-8">
        <Link
          to="/apps"
          className="px-6 py-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:bg-[#9486b4] text-white font-semibold rounded-lg transition-colors"
        >
          Show All Apps
        </Link>
      </div>
    </>
  );
};

export default TrendingApps;
