import { Link } from "react-router-dom";
import error from "../assets/error-404.png";
const ErrorPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex justify-center">
        <img src={error} alt="" className="h-[70vh] object-cover" />
      </div>
      <p className="text-2xl font-bold text-gray-600 text-center mt-7">
        Oops, page not found!
      </p>
      <p className="text-md font-light text-gray-500 text-center my-3">
        The page you are looking for is not available.
      </p>

      <div className="flex justify-center my-4">
        <Link
          to="/all-aplications"
          className="px-5 py-2 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition"
        >
          Back to Apps
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
