import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminContact = () => {
  const [contactData, setContactData] = useState([]);
  const { AuthorizationToken, fetchWithBaseURL } = useAuth();

  const getContactData = async () => {
    try {
      const response = await fetchWithBaseURL("/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      const data = await response.json();
      setContactData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetchWithBaseURL(`/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      if (response.ok) {
        getContactData();
        toast.success("deleted successfully");
      } else {
        toast.error("Not Deleted");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  return (
    <div className="max-w-full overflow-x-auto">
      <h1 className="p-5 font-[900] text-center text-5xl mt-10 text-black">
        Admin Contact Data
      </h1>
      <table className="min-w-full bg-gray-100 text-black text-xl border border-gray-500">
        <thead className="font-bold text-[15px]">
          <tr>
            <th className="border-b border-gray-500 p-10">Username</th>
            <th className="border-b border-gray-500 p-10">Email</th>
            <th className="border-b border-gray-500 p-10">Message</th>
            <th className="border-b border-gray-500 p-10">Delete</th>
          </tr>
        </thead>
        <tbody className="font-semibold">
          {contactData.map((curContact, index) => (
            <tr key={index}>
              <td className="border-b border-gray-500 text-center p-5">
                {curContact.username}
              </td>
              <td className="border-b border-gray-500 text-center p-5">
                {curContact.email}
              </td>
              <td className="border-b border-gray-500 text-center p-5">
                {curContact.message}
              </td>
              <td className="border-b border-gray-500 text-center">
                <button
                  onClick={() => deleteContact(curContact._id)}
                  className="bg-red-300 w-40 py-3 hover:bg-red-500 rounded-3xl"
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminContact;
