import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast} from "react-toastify"

const AdminUpdate = () => {
  const [userdata, setUserData] = useState({ username: "", email: "", phone: "" });
  const params = useParams();
  const { AuthorizationToken } = useAuth();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
        method: 'GET',
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      console.log(data.message);
      setUserData(data.message);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    setUserData({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthorizationToken,
        },
        body: JSON.stringify(userdata),
      });

      if(response.ok){
        toast.success("Updated succesfully");
      }else{
        toast.error("Not Updated");
      }
    }catch(err){
      console.log(err)
    }
    
  };

  return (
    <>
      <section>
        <main>
          <div className="min-h-screen max-w-full overflow-x-auto items-center justify-center">
            <div className="container grid grid-cols-1">
              <h1 className="main-heading mb-12 text-3xl text-black mt-10 md:text-5xl lg:text-6xl xl:text-9xl font-bold">
                Update User Data
              </h1>
              <div className="registration-form bg-gray-100 md:w-[500px] w-[300px] shadow-xl p-9 rounded-3xl">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 flex flex-col">
                    <label
                      htmlFor="username"
                      className="text-xl md:text-base lg:text-3xl xl:text-5xl text-gray-800  font-semibold"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={userdata.username}
                      onChange={handleInput}
                      className="input-field py-4 pl-9 bg-gray-200 text-gray-600 mt-3 rounded-lg text-2xl"
                    />
                  </div>
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
                      value={userdata.email}
                      onChange={handleInput}
                      className="input-field py-4 pl-9 bg-gray-200 mt-3 text-gray-600 rounded-lg text-2xl"
                    />
                  </div>

                  <div className="mb-4 flex flex-col">
                    <label
                      htmlFor="phone"
                      className="text-xl md:text-base lg:text-3xl xl:text-5xl text-gray-800  font-semibold"
                    >
                      Phone No.
                    </label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Enter your phone number"
                      id="phone"
                      required
                      autoComplete="off"
                      value={userdata.phone}
                      onChange={handleInput}
                      className="input-field py-4 pl-9 bg-gray-200 text-gray-600 mt-3 rounded-lg text-2xl"
                    />
                  </div>
                  <button
                    type="submit"
                    className="hover:bg-gray-600 text-black border-4 border-gray-300 rounded-full transition duration-300 py-4 px-3 mt-4 text-2xl font-semibold md:w-1/2 lg:w-1/3 xl:w-1/4"
                  >
                    Update
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

export default AdminUpdate;
