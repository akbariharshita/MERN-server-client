import { useEffect } from "react";

import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import { useAuth } from "../../store/auth";

const AdminLayout = () => {
  const navigate = useNavigate();
  const { user, isLoading, userAuthentication } = useAuth();

  useEffect(() => {
    userAuthentication();
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!user.isAdmin) {
    return navigate("/");
  }

  return (
    <header>
      <div className="grid grid-cols-12 min-h-screen text-white">
        <nav className="md:col-span-2 col-span-4 bg-gray-200 p-4">
          <ul className="fixed flex flex-col items-center justify-center py-36">
            <li>
              <NavLink
                to="/admin/users"
                className="flex py-2 md:px-12 text-black font-bold text-2xl hover:text-gray-500"
              >
                {" "}
                <FaUser className="text-3xl me-4" />
                Users{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/contacts"
                className="flex py-2 md:px-12 text-center text-black font-bold text-2xl hover:text-gray-500"
              >
                <RiMessage2Fill className="text-3xl me-4" />
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/service"
                className="flex py-2 md:px-12 text-center text-black font-bold text-2xl hover:text-gray-500"
              >
                <MdMiscellaneousServices className="text-3xl me-4" />
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/addservice"
                className="flex py-2 md:px-12 text-center text-black font-bold text-2xl hover:text-gray-500"
              >
                Add Services
              </NavLink>
            </li>
            <li>
              <div
                className="flex py-2 md:px-12 text-center text-black font-bold text-2xl hover:text-gray-500"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
              >
                Logout
              </div>
            </li>
          </ul>
        </nav>
        <div className="md:col-span-10 col-span-8 md:p-16">
          <Outlet />
        </div>
      </div>
    </header>
  );
};

export default AdminLayout;
