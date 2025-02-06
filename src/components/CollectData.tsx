import { useState, FormEvent } from "react";
import DisplayData from "./DisplayData";

export const CollectData = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowPopup(true); // Show popup after form submission
  };

  const handleClose = () => {
    setShowPopup(false);
    setFormData({ email: "", firstName: "", lastName: "", phone: "" }); // Clear form fields
  };

  return (
    <div
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto" >
        <form
          className="max-w-md mx-auto my-10 p-8 bg-white border rounded-lg shadow-xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-2xl font-bold mb-6">Enter Your Details</h2>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block py-3 px-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label className="absolute text-lg text-gray-500 top-0 left-4 transform -translate-y-6 scale-75 origin-[0] transition-all duration-300 ease-in-out">
              Email Address
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6 mb-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="block py-3 px-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <label className="absolute text-lg text-gray-500 top-0 left-4 transform -translate-y-6 scale-75 origin-[0] transition-all duration-300 ease-in-out">
                First Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="block py-3 px-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <label className="absolute text-lg text-gray-500 top-0 left-4 transform -translate-y-6 scale-75 origin-[0] transition-all duration-300 ease-in-out">
                Last Name
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block py-3 px-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label className="absolute text-lg text-gray-500 top-0 left-4 transform -translate-y-6 scale-75 origin-[0] transition-all duration-300 ease-in-out">
              Phone Number
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-lg transition duration-300"
          >
            Submit
          </button>
        </form>

        {showPopup && <DisplayData data={formData} onClose={handleClose} />}
      </div>
    </div>
  );
};
