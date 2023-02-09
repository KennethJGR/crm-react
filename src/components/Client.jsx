import React from "react";
import { useNavigate, Form, redirect } from "react-router-dom";
import { deleteClient } from "../data/Clients";

export async function action({ params }) {
    await deleteClient(params.id);

    return redirect("/");
}

const Client = ({ client }) => {
    const navigate = useNavigate();

    const { name, phone, email, company, id } = client;

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
                    onClick={() => {
                        navigate(`/clients/edit/${id}`);
                    }}
                >
                    Edit
                </button>

                <Form
                    method="POST"
                    action={`/clients/delete/${id}`}
                    onSubmit={(event) => {
                        if (
                            !window.confirm("Are you sure you want to delete this client?")
                        ) {
                            event.preventDefault();
                        }
                    }}
                >
                    <button
                        type="submit"
                        className=" text-red-600 hover:text-red-800 rounded text-xs uppercase font-bold"
                    >
                        Delete
                    </button>
                </Form>
            </td>
        </tr>
    );
};

export default Client;
