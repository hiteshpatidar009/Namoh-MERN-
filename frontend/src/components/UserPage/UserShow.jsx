import React, { useEffect, useState } from "react";
import axiosInstance from '../../api/axiosInstance.js';

function UserShow() {
  const [blist, setBlist] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/user/show") // Ensure the correct API endpoint
      .then((res) => {
        setBlist(res.data);
      })
      .catch((err) => {
        alert("Error fetching users: " + err);
      });
  }, []);

  return (
    <div className="p-5">
      <center>
        <h3 style={{backgroundColor:"blue",color:"white"}} className="text-2xl font-bold mb-4">User Details</h3>
        <table className="border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              
            </tr>
          </thead>
          <tbody>
            {blist.map((item, index) => (
              <tr key={item._id || index} className="border">
                <td className="border p-2">{item.fullname}</td>
                <td className="border p-2">{item.email}</td>
                <td className="border p-2">{item.phone}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default UserShow;
