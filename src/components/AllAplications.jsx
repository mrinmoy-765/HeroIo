import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import download from "../assets/downloads.png";

const AllAplications = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  // search
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="bg-gray-50 min-h-screen px-4">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-600 text-center pt-6 sm:pt-7">
        Our All Applications
      </h1>
      <p className="text-sm sm:text-md font-light text-gray-500 text-center mt-2 mb-6 sm:mb-8">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-2 sm:px-6 py-4 sm:py-5">
        <span className="text-lg sm:text-xl font-semibold">
          {filteredApps.length} Apps Found
        </span>
        <div>
          {/* Search functionality */}
          <input
            type="text"
            placeholder="Search apps by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
          />
        </div>
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-6 pb-8">
          {filteredApps.map((app) => (
            <Link
              key={app.id}
              to={`/app/${app.id}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-40 object-contain rounded-md mb-3"
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

                <p className="text-sm text-gray-600">⭐ {app.ratingAvg}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center py-16 px-4">
          <p className="text-lg sm:text-xl font-semibold text-gray-500">
            No App Found
          </p>
        </div>
      )}
    </div>
  );
};

export default AllAplications;
