import React from "react";

const Client = ({ client }) => {
    const { name, phone, email, company } = client;

    return (
        <tr className="border-b">
            <td className=" px-4 py-2 space-y-2">
                <p className="text-2xl text-gray-800"> {name}</p>
                <p>{company}</p>
            </td>

            <td className="p-6">
                <p className="text-gray-800">
                    <span className="text-gray-800 uppercase font-bold">Email:</span>{" "}
                    {email}
                </p>
                <p className="text-gray-800">
                    <span className="text-gray-800 uppercase font-bold">Phone:</span>{" "}
                    {phone}
                </p>
            </td>
            <td className="p-6 flex gap-3">
                <button
                    type="button"
                    className=" text-blue-600 hover:text-blue-800 rounded text-xs uppercase font-bold"
                >
                    Edit
                </button>
                <button
                    type="button"
                    className=" text-red-600 hover:text-red-800 rounded text-xs uppercase font-bold"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Client;
