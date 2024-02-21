import { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

createTheme("solarized", {
  text: {
    primary: "#268bd2",
    secondary: "#2aa198",
  },
  background: {
    default: "#002b36",
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF",
  },
  divider: {
    default: "#073642",
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});

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
  const columns = [
    {
      name: <h3 className="font-bold text-3xl text-blue-700">Service Id</h3>,
      selector: (row) => row._id,
      sortable: true,
      cell: (row) => <div className="font-bold">{row._id}</div>,
    },
    {
      name: <h3 className="font-bold text-3xl text-blue-700">Service Image</h3>,
      selector: (row) => (
        <img
          className="my-4 w-32 h-32"
          src={`http://localhost:5000/images/` + row.img}
          alt="MDN logo"
        />
      ),
    },
    {
      name: <h3 className="font-bold text-3xl text-blue-700">Service</h3>,
      selector: (row) => row.service,
      sortable: true,
      cell: (row) => <div className="font-bold">{row.service}</div>,
    },
    {
      name: <h3 className="font-bold text-3xl text-blue-700">Description</h3>,
      selector: (row) => row.description,
      sortable: true,
      cell: (row) => <div className="font-bold">{row.description}</div>,
    },
    {
      name: <h3 className="font-bold text-3xl text-blue-700">Price</h3>,
      selector: (row) => row.price,
      sortable: true,
      cell: (row) => <div className="font-bold">{row.price}</div>,
    },
    {
      name: <h3 className="font-bold text-3xl text-blue-700">Provider</h3>,
      selector: (row) => row.provider,
      sortable: true,
      cell: (row) => <div className="font-bold">{row.provider}</div>,
    },
    {
      name: <h3 className="font-bold text-3xl text-blue-700">Update</h3>,
      sortable: true,
      cell: (row) => (
        <Link to={`/admin/service/${row._id}/edit`}>
          <button className="font-bold px-10 py-5 rounded-full bg-slate-300">
            Edit
          </button>
        </Link>
      ),
    },
  ];

  // return (
  //   <>
  //   {/* <section className='bg-gray-100'>
  //     <h1 className='text-5xl text-blue-800 font-bold text-center pt-8'>Services</h1>
  //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  //       {service.map((curElem, index) => {
  //         const { price, description, provider, service, img } = curElem;
  //         return (
  //           <div className="max-w-lg mx-auto bg-gray-200 rounded overflow-hidden my-24 shadow-2xl shadow-gray-500" key={index}>
  //             <img className="w-full" src={`http://localhost:5000/images/`+ img} alt="Card" />
  //             <div className="px-6 py-4">
  //               <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2">
  //                 {price}
  //               </span>
  //               <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2">
  //                 {provider}
  //               </span>
  //             </div>
  //             <div className="px-6 py-4">
  //               <div className="font-bold text-5xl mb-2">{service}</div>
  //               <p className="text-gray-700 text-2xl mb-5">
  //                 {description}
  //               </p>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //     </section> */}
  //   </>
  // );

  return (
    <div className="mx-16">
      <DataTable
        title={
          <h3 className="text-center font-bold text-5xl my-10">
            Service Summary
          </h3>
        }
        columns={columns}
        data={service}
        defaultSortFieldId
        pagination={5}
        highlightOnHover
      />
    </div>
  );
};

export default Service;
