import React from 'react';

const Home = () => {
  return (
    <>
      <main>
        <section className='section-hero bg-gray-100'>
          <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="hero-content">
              <p className='text-black text-3xl mb-6'>We are the World Best IT Company</p>
              <h1 className="text-5xl lg:text-7xl xl:text-9xl font-bold mb-6 text-gray-700">Welcome to Thapa Technical</h1>
              <p className="text-gray-600 text-xl mb-6">Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Thapa Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="btn btn-group mt-4">
                <a href="/contact">
                  <button className='bg-blue-500 hover:bg-blue-700 text-2xl text-white font-bold py-4 px-4 rounded-full'>
                    Connect Now
                  </button>
                </a>
                <a href="/service">
                  <button className='btn secondary-btn bg-gray-500 text-2xl hover:bg-gray-700 text-white font-bold py-4 px-4 ml-2 rounded-full'>
                    Learn More
                  </button>
                </a>
              </div>
            </div>

            <div className="hero-image mt-20">
              <img src="/images/home.png" alt="coding together" className="w-full md:max-w-2xl mx-auto md:order-2 order-1" />
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

      <section className='section-hero bg-gray-100'>
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="hero-image mt-4 lg:mt-0">
            <img src="/images/design.png" alt="coding together" className="w-full md:max-w-2xl mx-auto" />
          </div>

          <div className="hero-content mt-4 ml-5 lg:mt-0">
            <p className="text-black text-3xl mb-6">We are here to help you</p>
            <h1 className="text-5xl lg:text-7xl xl:text-9xl font-bold mb-6 text-gray-700">Get Started Today</h1>
            <p className="text-gray-600 text-xl mb-6">Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group mt-4">
              <a href="/contact">
                <button className='btn bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-4 px-4 rounded-full'>
                  Connect Now
                </button>
              </a>
              <a href="/service">
                <button className='btn secondary-btn bg-gray-500 hover:bg-gray-700 text-white text-2xl font-bold py-4 px-4 rounded-full ml-2'>
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
