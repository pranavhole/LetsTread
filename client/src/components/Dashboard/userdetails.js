import React, { useState, useEffect } from 'react';

const UserDetailsClone = () => {

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
    <h2 className="text-2xl font-semibold mb-4">User Details</h2>
    <table className="w-full">
      <tbody>
        <tr>
          <td className="py-2">Name:</td>
          <td className="py-2">Pranav Hole</td>
        </tr>
        <tr>
          <td className="py-2">Mobile No.:</td>
          <td className="py-2">8530008525</td>
        </tr>
        <tr>
          <td className="py-2">Email ID:</td>
          <td className="py-2">pranavhole050610@gmail.com</td>
        </tr>
        <tr>
          <td className="py-2">City:</td>
          <td className="py-2">Amravati</td>
        </tr>
        <tr>
          <td className="py-2">State:</td>
          <td className="py-2">Maharashtra</td>
        </tr>
        <tr>
          <td className="py-2">Pincode:</td>
          <td className="py-2">444603</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default UserDetailsClone;
