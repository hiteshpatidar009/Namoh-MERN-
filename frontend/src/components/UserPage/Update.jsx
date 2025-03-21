import React, { useState } from 'react';
import axiosInstance from '../../api/axiosInstance.js';

function Update() {
  const [sname, setSname] = useState('');
  const [title, setTitle] = useState('');
  const [packet, setPacket] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');

  const handleSnameChange = (evt) => {
    setSname(evt.target.value);
  };

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };
  const handlePacketChange = (evt) => {
    setPacket(evt.target.value);
  };

  const handleCategoryChange = (evt) => {
    setCategory(evt.target.value);
  };

  const handlePriceChange = (evt) => {
    setPrice(evt.target.value);
  };

  const handleImageChange = (evt) => {
    setImage(evt.target.value);
  };

  const handleSearchButton = () => {
    axiosInstance
      .get(`/spices/search/${sname}`)
      .then((res) => {
        setTitle(res.data.title);
        setPacket(res.data.packet);
        setCategory(res.data.category);
        setPrice(res.data.price);
        setImage(res.data.image);
        setMessage('');
      })
      .catch((err) => {
        setMessage('Spice not found.');
        clearForm();
      });
  };

  const handleUpdateButton = () => {
    const updatedSpice = {
      name: sname,
      title: title,
      packet:packet,
      category: category,
      price: price,
      image: image,
    };

    axios
      .put(`http://localhost:40001/spices/update/${sname}`, updatedSpice)
      .then((res) => {
        setMessage('Spice updated successfully.');
      })
      .catch((err) => {
        setMessage('Error updating spice.');
      });
  };

  const clearForm = () => {
    setSname('');
    setTitle('');
    setPacket('');
    setCategory('');
    setPrice('');
    setImage('');
  };

  return (
    <div className="mt-28">
      <center>
        <h4 className="bg-blue-500 text-white p-2 rounded">Update Spice Details</h4>
        <table className="border-separate border border-blue-500 border-4 mt-3 mb-3">
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Enter Spice Name</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  value={sname}
                  onChange={handleSnameChange}
                className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Title</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Size of Packet</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  value={packet}
                  onChange={handlePacketChange}
                  className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Category</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  value={category}
                  onChange={handleCategoryChange}
                 className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Price</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  value={price}
                  onChange={handlePriceChange}
                  className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Image URL</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  value={image}
                  onChange={handleImageChange}
                  className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
                />
              </td>
            </tr>
            <tr>
              <td className="p-2"></td>
              <td className="p-2">
                <button
                  type="button"
                  onClick={handleSearchButton}
                  className="bg-green-500 text-white p-2 rounded mr-2"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={handleUpdateButton}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {message && <p className="mt-2 text-red-500">{message}</p>}
      </center>
    </div>
  );
}

export default Update;
