import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance.js'; // adjust the path as per your folder structure
import { motion } from 'framer-motion';

function Contact() {
  const [contactData, setContactData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axiosInstance.get('/contact/contactShow');
        setContactData(response.data);
      } catch (err) {
        console.error('Error fetching contact data:', err);
        setError('Unable to fetch data.');
      }
    };

    fetchContact();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <motion.div
        className="max-w-lg w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-gray-700 dark:text-white">
          Latest Contact Submission
        </h3>

        {error && (
          <motion.p className="text-red-500 text-center" animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
            {error}
          </motion.p>
        )}

        {contactData ? (
          <div className="space-y-4 text-gray-700 dark:text-gray-200">
            <p><strong>Full Name:</strong> {contactData.fullname}</p>
            <p><strong>Email:</strong> {contactData.email}</p>
            <p><strong>Phone:</strong> {contactData.phone}</p>
            <p><strong>Address:</strong> {contactData.address}</p>
            <p><strong>Message:</strong> {contactData.message}</p>
            <p><strong>Feedback Rating:</strong> {contactData.feedback} / 5</p>
          </div>
        ) : (
          !error && <p className="text-center">Loading...</p>
        )}
      </motion.div>
    </div>
  );
}

export default Contact;
