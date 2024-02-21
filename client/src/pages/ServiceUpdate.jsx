import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const ServiceUpdate = () => {
  const [servicedata, setServicedata] = useState({
    service: "",
    description: "",
    price: "",
    provider: "",
    img: null,
  });
  const params = useParams();
  const { AuthorizationToken, fetchWithBaseURL } = useAuth();

  const getServiceData = async () => {
    try {
      const response = await fetchWithBaseURL(`/service/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      setServicedata(data.message);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getServiceData();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setServicedata({ ...servicedata, [name]: value });
  };

  const handleImg = (e) => {
    const file = e.target.files[0];
    setServicedata({ ...servicedata, img: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("service", servicedata.service);
      formData.append("description", servicedata.description);
      formData.append("price", servicedata.price);
      formData.append("provider", servicedata.provider);
      formData.append("img", servicedata.img);

      const response = await fetchWithBaseURL(`/service/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthorizationToken,
        },
        body: formData,
      });
      if (response.ok) {
        toast.success("Updated successfully");
      } else {
        toast.error("Not Updated");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <main>
        <div className="min-h-screen max-w-full overflow-x-auto items-center justify-center">
          <div className="container grid grid-cols-1">
            <h1 className="main-heading mb-12 text-3xl text-black md:text-5xl lg:text-6xl xl:text-9xl font-bold">
              Update Service Data
            </h1>
            <div className="registration-form bg-gray-100 md:w-[500px] w-[300px] shadow-xl p-9 rounded-3xl">
              <form onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col">
                  <label
                    htmlFor="img"
                    className="text-xl md:text-base lg:text-3xl xl:text-5xl text-gray-800  font-semibold"
                  >
                    Upload Image
                  </label>
                  <input
                    type="file"
                    name="img"
                    id="img"
                    required
                    onChange={handleImg}
                    className="input-field py-4 pl-9 bg-gray-200 text-gray-700 font-semibold mt-3 rounded-lg text-2xl"
                  />
                </div>
                <div className="mb-4 flex flex-col">
                  <label
                    htmlFor="service"
                    className="text-xl md:text-base lg:text-3xl xl:text-5xl text-gray-800  font-semibold"
                  >
                    Services
                  </label>
                  <input
                    type="text"
                    name="service"
                    placeholder="services"
                    id="service"
                    required
                    autoComplete="off"
                    value={servicedata.service}
                    onChange={handleInput}
                    className="input-field py-4 pl-9 bg-gray-200 text-gray-700 font-semibold mt-3 rounded-lg text-2xl"
                  />
                </div>
                <div className="mb-4 flex flex-col">
                  <label
                    htmlFor="description"
                    className="text-xl md:text-base lg:text-3xl xl:text-5xl text-gray-800  font-semibold"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="description"
                    id="desc"
                    required
                    autoComplete="off"
                    value={servicedata.description}
                    onChange={handleInput}
                    className="input-field py-4 pl-9 bg-gray-200 mt-3 text-gray-700 font-semibold rounded-lg text-2xl"
                  />
                </div>

                <div className="mb-4 flex flex-col">
                  <label
                    htmlFor="price"
                    className="text-xl md:text-base lg:text-3xl xl:text-5xl text-gray-800  font-semibold"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="price"
                    id="price"
                    required
                    autoComplete="off"
                    value={servicedata.price}
                    onChange={handleInput}
                    className="input-field py-4 pl-9 bg-gray-200 text-gray-700 font-semibold mt-3 rounded-lg text-2xl"
                  />
                </div>

                <div className="mb-4 flex flex-col">
                  <label
                    htmlFor="provider"
                    className="text-xl md:text-base lg:text-3xl xl:text-5xl text-gray-800  font-semibold"
                  >
                    Provider
                  </label>
                  <input
                    type="text"
                    name="provider"
                    placeholder="provider"
                    id="pro"
                    required
                    autoComplete="off"
                    value={servicedata.provider}
                    onChange={handleInput}
                    className="input-field py-4 pl-9 bg-gray-200 text-gray-700 font-semibold mt-3 rounded-lg text-2xl"
                  />
                </div>

                <button
                  type="submit"
                  className="hover:bg-gray-600 text-black border-4 border-gray-300 rounded-full transition duration-300 py-4 px-3 mt-4 text-2xl font-semibold md:w-1/2 lg:w-1/3 xl:w-1/4"
                >
                  Update Service
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ServiceUpdate;
