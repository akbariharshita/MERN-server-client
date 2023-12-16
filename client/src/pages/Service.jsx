import React from 'react';
import { useAuth } from '../store/auth';

const Service = () => {
  const { service } = useAuth();

  return (
    <>
    <section className='bg-sky-200'>
      <h1 className='text-5xl text-blue-800 font-bold text-center pt-8'>Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {service.map((curElem, index) => {
          const { price, description, provider, services } = curElem;
          return (
            <div className="max-w-lg mx-auto bg-sky-100 rounded overflow-hidden my-24 shadow-2xl shadow-gray-500" key={index}>
              <img className="w-full" src="/images/services.png" alt="Card" />
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2">
                  {price}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2">
                  {provider}
                </span>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-5xl mb-2">{services}</div>
                <p className="text-gray-700 text-2xl mb-5">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      </section>
    </>
  );
};

export default Service;
