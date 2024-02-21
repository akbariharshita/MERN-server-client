import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { IMAGES_URL } from "../utils";

const Service = () => {
  const [service, setService] = useState([]);

  const { fetchWithBaseURL } = useAuth();

  const getServices = async () => {
    try {
      const response = await fetchWithBaseURL("/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setService(data.message);
      }
    } catch (err) {
      console.log("Error Fetching user data");
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <section className="bg-gray-100">
      <h1 className="text-5xl text-blue-800 font-bold text-center pt-8">
        Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {service.map((curElem, index) => {
          const { price, description, provider, service, img } = curElem;
          return (
            <div
              className="max-w-lg mx-auto bg-gray-200 rounded overflow-hidden my-24 shadow-2xl shadow-gray-500"
              key={index}
            >
              <img className="w-full" src={IMAGES_URL + img} alt="Card" />
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2">
                  {price}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2">
                  {provider}
                </span>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-5xl mb-2">{service}</div>
                <p className="text-gray-700 text-2xl mb-5">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
