import React from 'react'
import { useAuth } from "../store/auth";

const About = () => {
  const { user } = useAuth();
  return (
    <>
    <main>
        <section className='section-hero bg-gray-100'>
          <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="hero-content mt-56">
              <p className='text-black text-3xl mb-6'>Welcome, {user ? `${user.username} to our website` : `to our website`}</p>
              <h1 className="text-5xl lg:text-7xl xl:text-9xl font-bold mb-6 text-gray-700">Why Choose Us?</h1>
              <p className="text-gray-600 text-xl mb-6">
                Expertise: Our team consists of experienced IT professionals who are passionate about    staying up-to-date with the latest industry trends.
              </p>
              <p className="text-gray-600 text-xl mb-6">
                Customization: We understand that every business is unique. Thats why we create solutions that are tailored to your specific needs and goals.
              </p>
              <p className="text-gray-600 text-xl mb-6">
                Customer-Centric Approach: We prioritize your satisfaction and provide top-notch support to address your IT concerns.
              </p>
              <p className="text-gray-600 text-xl mb-6">
                Affordability: We offer competitive pricing without compromising  on the quality of our services.
              </p>
              <p className="text-gray-600 text-xl mb-6">
                Reliability: Count on us to be there when you need us. We're committed to ensuring
              </p>

              <div className="btn btn-group mt-4">
                <a href="/contact">
                  <button className='btn bg-blue-500 hover:bg-blue-700 text-2xl text-white font-bold py-4 px-4 rounded-full'>
                    Connect Now
                  </button>
                </a>
                <a href="/service">
                  <button className='btn secondary-btn bg-gray-500 text-2xl hover:bg-gray-700 text-white font-bold py-4 px-4 rounded-full ml-2'>
                    Learn More
                  </button>
                </a>
              </div>
            </div>

            <div className="hero-image mt-4 md:mt-0">
              <img src="/images/about.png" alt="coding together"  className="w-full md:max-w-2xl mx-auto md:order-2 order-1" />
            </div>
          </div>
        </section>
      </main>

    <section className='section-hero bg-gray-200 hidden md:block'>
      <div className="container grid  grid-cols-1 md:grid-cols-4">
        <div className="div1 border-r-2 border-black mx-auto pe-9 mb-4 md:mb-0">
          <h2 className="text-5xl text-black font-bold">50+</h2>
          <p className="text-gray-600 text-2xl mt-3">registered companies</p>
        </div> 
        <div className="div1 border-r-2 border-black mx-auto pe-9 mb-4 md:mb-0">
          <h2 className="text-5xl text-black pe-4 font-bold">100,00+</h2>
          <p className="text-gray-600 text-2xl mt-3">Happy Clients</p>
        </div> 
        <div className="div1 border-r-2 border-black mx-auto pe-9 mb-4 md:mb-0">
          <h2 className="text-5xl text-black pe-4 font-bold">500+</h2>
          <p className="text-gray-600 text-2xl mt-3">Well known Developers</p>
        </div> 
        <div className="div1 border-r-2 border-black mx-auto pe-9 mb-4 md:mb-0">
          <h2 className="text-5xl text-black font-bold">24/7</h2>
          <p className="text-gray-600 text-2xl mt-3">Service</p>
        </div>
      </div>
    </section>
  </>
  )
}

export default About
