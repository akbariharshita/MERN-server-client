import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Logout from "./pages/Logout";
import AdminLayout from "./components/layouts/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import AdminContact from "./pages/AdminContact";
import AdminUpdate from "./pages/AdminUpdate";
import Servicesadd from "./pages/Servicesadd";
import ServiceUpdate from "./pages/ServiceUpdate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContact />} />

            <Route path="service" element={<Register />} />
            <Route path="addservice" element={<Servicesadd />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
            <Route path="service/:id/edit" element={<ServiceUpdate />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
