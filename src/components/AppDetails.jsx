import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ratings from "../assets/ratings.png";
import downloads from "../assets/downloads.png";
import reviews from "../assets/review.png";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const selectedApp = data.find((item) => item.id === Number(id));
        setApp(selectedApp || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching app details:", error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    const installedApps = JSON.parse(
      localStorage.getItem("installedApps") || "[]",
    );
    setInstalled(installedApps.some((item) => item.id === Number(id)));
  }, [id]);

  const chartData = useMemo(() => {
    if (!app?.ratings) return [];
    return app.ratings.map((rating) => ({
      name: rating.name,
      count: rating.count,
    }));
  }, [app]);

  const handleInstall = () => {
    if (!app) return;

    const installedApps = JSON.parse(
      localStorage.getItem("installedApps") || "[]",
    );

    if (!installedApps.find((item) => item.id === app.id)) {
      const newApp = {
        id: app.id,
        image: app.image,
        title: app.title,
        ratingAvg: app.ratingAvg,
        downloads: app.downloads,
        size: app.size,
      };

      const updatedApps = [...installedApps, newApp];

      localStorage.setItem("installedApps", JSON.stringify(updatedApps));
      setInstalled(true);
      toast.success(`${app.title} installed successfully!`);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-500 text-sm sm:text-base">
          Loading app details...
        </p>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4 sm:px-6">
        <p className="text-xl sm:text-2xl font-semibold text-gray-700">
          App Details not found
        </p>
        <Link
          to="/all-aplications"
          className="px-4 sm:px-5 py-2 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition text-sm sm:text-base"
        >
          Back to Apps
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 px-4 sm:px-6 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1fr]">
          <div className="rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-8 shadow-sm">
            <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row">
              <img
                src={app.image}
                alt={app.title}
                className="h-48 sm:h-72 w-full rounded-2xl sm:rounded-3xl object-cover shadow-sm lg:w-96 flex-shrink-0"
              />
              <div className="flex-1 space-y-3 sm:space-y-2">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    {app.title}
                  </h1>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <h2 className="text-sm sm:text-md font-semibold text-gray-800">
                    Developed by{" "}
                    <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                      {app.companyName}
                    </span>
                  </h2>
                </div>

                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
                  <div className="rounded-2xl sm:rounded-3xl bg-violet-50 p-4 sm:p-5">
                    <img
                      src={ratings}
                      alt=""
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    />

                    <p className="text-xs sm:text-sm mt-2 sm:mt-3 uppercase tracking-[0.15em] text-violet-600">
                      Average Rating
                    </p>
                    <p className="mt-1 sm:mt-1.5 text-2xl sm:text-3xl font-semibold text-gray-900">
                      {app.ratingAvg}
                    </p>
                  </div>
                  <div className="rounded-2xl sm:rounded-3xl bg-violet-50 p-4 sm:p-5">
                    <img
                      src={downloads}
                      alt=""
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    />
                    <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-violet-600 mt-2 sm:mt-3">
                      Downloads
                    </p>
                    <p className="mt-1 sm:mt-1.5 text-2xl sm:text-3xl font-semibold text-gray-900">
                      {app.downloads.toLocaleString()}
                    </p>
                  </div>
                  <div className="rounded-2xl sm:rounded-3xl bg-violet-50 p-4 sm:p-5">
                    <img
                      src={reviews}
                      alt=""
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    />
                    <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-violet-600 mt-2 sm:mt-3">
                      Reviews
                    </p>
                    <p className="mt-1 sm:mt-1.5 text-2xl sm:text-3xl font-semibold text-gray-900">
                      {app.reviews.toLocaleString()}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={installed}
                  onClick={handleInstall}
                  className={`w-full rounded-md px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-white transition ${
                    installed
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {installed
                    ? `Installed ${app.size} MB`
                    : `Install Now ${app.size} MB`}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-8 shadow-sm">
          <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Ratings
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-gray-500">
                Visualize how users rated this app across star levels.
              </p>
            </div>
          </div>

          <div className="h-64 sm:h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 10 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                />
                <Tooltip formatter={(value) => [value, "Reviews"]} />
                <Bar dataKey="count" fill="#7C3AED" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <p className="text-gray-500 text-sm sm:text-base px-4 sm:px-0">
          <span className="font-semibold text-sm sm:text-md text-black">
            Description :{" "}
          </span>
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
