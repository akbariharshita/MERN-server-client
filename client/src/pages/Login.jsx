import { useState } from "react";
import loginpic from "/images/login.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const { storetokenInLS, fetchWithBaseURL } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetchWithBaseURL(`/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        storetokenInLS(data.token);
        // localStorage.setItem("token", data.token);
        setUser({ email: "", password: "" });
        toast.success("Login Successfull");
        navigate("/admin/users");
      } else {
        toast.error(data.extraDetails ? data.extraDetails : data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
              <div className="registration-image">
                <img
                  src={loginpic}
                  alt="registration pic"
                  className="signup-image w-full md:max-w-2xl mx-auto"
                />
              </div>
              <div className="registration-form order-1 md:order-2 shadow-xl p-9 rounded-3xl">
                <h1 className="main-heading mb-7 text-3xl text-black md:text-5xl lg:text-7xl xl:text-9xl font-bold">
                  Login Form
                </h1>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4 flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-xl md:text-base lg:text-3xl xl:text-5xl text-gray-800  font-semibold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                      className="input-field py-4 pl-9 bg-gray-200 mt-3 rounded-lg text-2xl"
                    />
                  </div>

                  <div className="mb-4 flex flex-col">
                    <label
                      htmlFor="password"
                      className="text-xl md:text-base lg:text-3xl xl:text-5xl text-gray-800  font-semibold"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                      className="input-field py-4 pl-9 bg-gray-200 mt-3 rounded-lg text-2xl"
                    />
                  </div>

                  <button
                    type="submit"
                    className="hover:bg-gray-400 border-4 border-gray-500 rounded-full transition duration-300 py-4 px-3 text-2xl mt-4 font-semibold md:w-1/2 lg:w-1/3 xl:w-1/4"
                  >
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
