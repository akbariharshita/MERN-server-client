import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getAllUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      const data = await response.json();
      setUsers(data);

    } catch (err) {
      console.error(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        getAllUserData();
      }

    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <div className="max-w-full overflow-x-auto">
      <h1 className='p-5 font-[900] mt-10 text-center text-5xl text-black'>Admin Users Data</h1>
      <table className="min-w-full bg-gray-100 text-black text-xl border border-gray-500">
        <thead className='font-bold text-[15px]'>
          <tr>
            <th className="border-b border-gray-500 p-10">Name</th>
            <th className="border-b border-gray-500 p-10">Email</th>
            <th className="border-b border-gray-500 p-10">Phone</th>
            <th className="border-b border-gray-500 p-10">Update</th>
            <th className="border-b border-gray-500 p-10">Delete</th>
          </tr>
        </thead>
        <tbody className='font-semibold'>
          {users.map((curUser, index) => (
            <tr key={index}>
              <td className="border-b border-gray-500 text-center p-5">{curUser.username}</td>
              <td className="border-b border-gray-500 text-center p-5">{curUser.email}</td>
              <td className="border-b border-gray-500 text-center p-5">{curUser.phone}</td>
              <td className="border-b border-gray-500 text-center">
                <Link to={`/admin/users/${curUser._id}/edit`}>
                  <button className='text-green-500 text-4xl w-40 py-3 hover:text-green-700'><FiEdit/></button>
                </Link>
              </td>
              <td className="border-b border-gray-500 text-center"><button onClick={() => deleteUser(curUser._id)} className='text-red-500 text-5xl hover:text-red-700'><MdDeleteForever/></button> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;
