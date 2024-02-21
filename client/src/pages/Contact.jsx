import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
}

const Contact = () => {
  const { user } = useAuth();
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    })
    setUserData(false);
  };

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const response = await fetch("http://localhost:5000/api/form/contact",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact),
      });

      if(response.ok){
         setContact(defaultContactFormData);
         const data = await response.json();
         console.log(data);
         toast.success("Message send successfully");
      }
    }catch(err){
      toast.error("Message not send");
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
                  src="/images/support.png"
                  alt="contact pic"
                  className="signup-image w-full md:max-w-2xl mx-auto"
                />
              </div>
              <div className="registration-form order-1 md:order-2 shadow-xl p-9 rounded-3xl">
                <h1 className="main-heading mb-7 text-3xl text-black md:text-5xl lg:text-7xl xl:text-9xl font-bold">
                  Contact Form
                </h1>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4 flex flex-col">
                    <label htmlFor="username" className="text-xl md:text-base lg:text-3xl xl:text-5xl text-gray-800  font-semibold">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={contact.username}
                      onChange={handleInput}
                      className="input-field py-4 pl-9 bg-gray-200 mt-3 rounded-lg text-2xl"
                    />
                  </div>
                  <div className="mb-4 flex flex-col">
                    <label htmlFor="email" className="text-xl md:text-base lg:text-3xl xl:text-5xl text-gray-800  font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={contact.email}
                      onChange={handleInput}
                      className="input-field py-4 pl-9 bg-gray-200 mt-3 rounded-lg text-2xl"
                    />
                  </div>

                  <div className="mb-4 flex flex-col">
                    <label htmlFor="email" className="text-xl md:text-base lg:text-3xl xl:text-5xl text-gray-800  font-semibold">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Enter your Message"
                      id="message"
                      autoComplete="off"
                      value={contact.message}
                      onChange={handleInput}
                      required
                      cols="50"
                      rows="6"
                      className="py-4 pl-9 bg-gray-200 mt-3 rounded-lg text-2xl"
                    ></textarea>
                  </div>
                  <button type="submit" className="hover:bg-gray-400 border-4 border-gray-300 rounded-full transition duration-300 py-4 px-3 mt-4 text-2xl font-semibold md:w-1/2 lg:w-1/3 xl:w-1/4">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};

export default Contact
