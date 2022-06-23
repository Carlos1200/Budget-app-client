import { Link } from "react-router-dom";
import Page404Image from "../assets/Page404Image";

export const Page404 = () => {
  return (
    <div className="bg-secondary h-screen">
      <div className="md:grid md:grid-cols-5 md:gap-5">
        <div className="flex items-center justify-center col-span-2 text-white text-center">
          <div>
            <h1 className="text-5xl font-bold my-5">I have bad news for you</h1>
            <p>
              The page you are looking for might be removed or is temporally
              unavailable
            </p>
            <button>
              <Link to="/" about="Go to the home page">
                <p className="mt-4 bg-quaternary px-3 py-2 rounded-md hover:bg-tertiary shadow-md shadow-quaternary">
                  Go to Dashboard
                </p>
              </Link>
            </button>
          </div>
        </div>
        <Page404Image className=" mx-auto w-9/12 md:w-full h-full md:col-span-3" />
      </div>
    </div>
  );
};
