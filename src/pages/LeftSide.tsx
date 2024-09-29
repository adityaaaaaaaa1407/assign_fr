import "@fortawesome/fontawesome-free/css/all.min.css";

const LeftSide = () => {
  return (
    <div className="flex flex-col py-0.5 px-12">
      <div className="bg-white xl:p-4 p-2  xl:w-72 w-52  xl:h-56  rounded-xl  transform xl:rotate-[-10.2deg] mt-4 xl:mb-0 mb-12 ">
        <div className="flex flex-col">
          <i className="fas fa-tachometer-alt text-blue-500 text-3xl  bg-white-200 rounded-full p-4"></i>
          <h2 className="text-xl font-bold">Load Testing</h2>
        </div>
        <p className="text-gray-500 mt-2">
          Our platform ensures peak performance by simulating real-world user
          loads efficiently and accurately.
        </p>
      </div>
      <div className="flex justify-end">
        <div className="bg-white p-6  xl:w-72 w-42  h-56  rounded-xl  transform xl:rotate-[4deg] -mt-2 mr-8 xl:mb-0 mb-12">
          <div className="flex flex-col ">
            <div>
              <i className="fas fa-robot bg-yellow-200 rounded-full p-4 text-yellow-500 text-3xl mb-4"></i>
            </div>
            <h2 className="text-xl font-bold mb-2">AI Recommendations</h2>
          </div>
          <p className="text-gray-500 ">
            Optimize load and security testing with intelligent, data-driven
            insights for enhanced performance and safety.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 xl:w-72 w-42  h-72  rounded-xl  transform xl:rotate-[-10.2deg] xl:-mt-12  xl:ml-8 ">
        <div className="flex flex-col  ">
          <div>
            <i className="fas fa-fingerprint text-green-500 text-3xl bg-green-200 rounded-full p-4 mb-4"></i>
          </div>
          <h2 className="text-xl font-bold">Security Testing</h2>
        </div>
        <p className="text-gray-500 mt-2">
          Safeguard your applications by identifying vulnerabilities and
          ensuring robust protection against threats.
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
