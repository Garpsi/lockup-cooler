import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import LogoPNG from '../assets/logo.png';

const Table = () => {

  return (
    <div className="flex flex-col">
        <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1/5"
                    >
                    Token
                    </th>
                    <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1/5"
                    >
                    Amount
                    </th>
                    <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1/5"
                    >
                    Lockup Period
                    </th>
                    <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1/5"
                    >
                    Status
                    </th>
                    <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1/5"
                    >
                    Edit
                    </th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
                    1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">Jone Doe</td>
                    <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                    jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                    <a className="text-green-500 hover:text-green-700" href="#">
                        Edit
                    </a>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
                    2
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">Jone Doe</td>
                    <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                    jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                    <a className="text-green-300 hover:text-green-700" href="#">
                        Edit
                    </a>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
                    3
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">Jone Doe</td>
                    <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                    jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                    <a className="text-green-500 hover:text-green-700" href="#">
                        Edit
                    </a>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
                    4
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                    Mary Poppins
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                    marypoppins@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                    <a className="text-green-300 hover:text-green-700" href="#">
                        Edit
                    </a>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Table;