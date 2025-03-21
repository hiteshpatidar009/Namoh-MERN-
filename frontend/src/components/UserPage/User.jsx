import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Additem from './Additem';
import Delete from './Delete';
import Search from './Search';
import UserShow from './UserShow';
import MainTitle from './MainTitle';
import Update from './Update';
import Contact from './Contact';

function User() {
  const [activeTab, setActiveTab] = useState('main');

  const renderComponent = () => {
    switch (activeTab) {
      case 'add':
        return <Additem />;
        case 'update':
        return <Update />;
      case 'search':
        return <Search />;
      case 'delete':
        return <Delete />;
      case 'show':
        return <UserShow />;
        case 'contact-show':
          return <Contact />;  
      default:
        return <MainTitle />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 mt-12">🌟 User Dashboard 🌟</h1>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 text-center">
          {[
            { label: 'Add Item', value: 'add', color: 'blue' },
            { label: 'Update', value: 'update', color: 'black' },
            { label: 'Search', value: 'search', color: 'green' },
            { label: 'Delete', value: 'delete', color: 'red' },
            { label: 'User Show', value: 'show', color: 'purple' },
            { label: 'Contact-Show', value: 'contact-show', color: 'orange' },
            
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setActiveTab(btn.value)}
              className={`p-4 rounded-xl shadow-md font-semibold transition-transform transform hover:scale-105 ${
                activeTab === btn.value
                  ? `bg-${btn.color}-600 text-white`
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Render Selected Component */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors duration-300">
          {renderComponent()}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default User;
