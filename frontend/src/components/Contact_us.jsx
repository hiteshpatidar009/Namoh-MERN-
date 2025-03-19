import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ContactUs() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    feedback: 0,
  });

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFeedbackChange = (rating) => {
    setFormData((prevData) => ({
      ...prevData,
      feedback: rating,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:40001/contact/contactSave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMsg('Thank you! Your message has been received.');
        setErrorMsg('');
        setFormData({
          fullname: '',
          email: '',
          phone: '',
          address: '',
          message: '',
          feedback: 0,
        });
      } else {
        setErrorMsg('Something went wrong. Please try again.');
        setSuccessMsg('');
      }
    } catch (error) {
      setErrorMsg('An error occurred. Please try again.');
      setSuccessMsg('');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 mt-32">
      <motion.div
        className="max-w-lg w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-gray-700 dark:text-white">
          Contact Us
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-600 dark:text-gray-200">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 dark:text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-600 dark:text-gray-200">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-600 dark:text-gray-200">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-600 dark:text-gray-200">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              required
            />
          </div>

          {/* Feedback */}
          <div>
            <label className="block text-gray-600 dark:text-gray-200 mb-2">Feedback</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <motion.button
                  key={rating}
                  type="button"
                  onClick={() => handleFeedbackChange(rating)}
                  className={`w-10 h-10 rounded-full ${
                    formData.feedback === rating ? 'bg-pink-500 text-white' : 'bg-gray-300 text-gray-700'
                  } focus:outline-none`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {rating}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Feedback message */}
          {successMsg && (
            <motion.p className="text-green-500 text-center" animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              {successMsg}
            </motion.p>
          )}
          {errorMsg && (
            <motion.p className="text-red-500 text-center" animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              {errorMsg}
            </motion.p>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default ContactUs;
