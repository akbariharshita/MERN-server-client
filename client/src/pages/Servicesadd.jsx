import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Servicesadd = () => {
  const { AuthorizationToken, fetchWithBaseURL } = useAuth();
  const navigate = useNavigate();
  const [addService, setAddService] = useState({
    img: null,
    service: "",
    description: "",
    price: "",
    provider: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddService({ ...addService, [name]: value });
  };

  const handleImg = (e) => {
    const file = e.target.files[0];
    setAddService({ ...addService, img: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("service", addService.service);
      formData.append("description", addService.description);
      formData.append("price", addService.price);
      formData.append("provider", addService.provider);
      formData.append("img", addService.img);

      const response = await fetchWithBaseURL(`/service/add`, {
        method: "POST",
        headers: {
          Authorization: AuthorizationToken,
        },
        body: formData,
      });

      if (response.ok) {
        setAddService({
          service: "",
          description: "",
          price: "",
          provider: "",
          img: null,
        });
        toast.success("Services Add Successfull");
        navigate("/admin/service");
      } else {
        toast.error("Service not added");
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
              Add Service Data
            </h1>
            <div className="registration-form bg-gray-100 md:w-[500px] w-[300px] shadow-xl p-9 rounded-3xl">
              <form onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col">
                  <label
                    htmlFor="service"
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
                    className="input-field py-4 pl-9 bg-gray-200 text-gray-600 mt-3 rounded-lg text-2xl"
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
                    value={addService.service}
                    onChange={handleInput}
                    className="input-field py-4 pl-9 bg-gray-200 text-gray-600 mt-3 rounded-lg text-2xl"
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
                    value={addService.description}
                    onChange={handleInput}
                    className="input-field py-4 pl-9 bg-gray-200 mt-3 text-gray-600 rounded-lg text-2xl"
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
                    type="number"
                    name="price"
                    placeholder="price"
                    id="price"
                    required
                    autoComplete="off"
                    value={addService.price}
                    onChange={handleInput}
                    className="input-field py-4 pl-9 bg-gray-200 text-gray-600 mt-3 rounded-lg text-2xl"
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
                    value={addService.provider}
                    onChange={handleInput}
                    className="input-field py-4 pl-9 bg-gray-200 text-gray-600 mt-3 rounded-lg text-2xl"
                  />
                </div>

                <button
                  type="submit"
                  className="hover:bg-gray-600 text-black border-4 border-gray-300 rounded-full transition duration-300 py-4 px-3 mt-4 text-2xl font-semibold md:w-1/2 lg:w-1/3 xl:w-1/4"
                >
                  Add Services
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Servicesadd;
