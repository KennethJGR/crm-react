import React from "react";
import { useLoaderData } from "react-router-dom";
import Client from "../components/Client";

export function loader() {
  const clients = [
    {
      id: 1,
      name: "Juan",
      phone: 102013313,
      email: "juan@juan.com",
      company: "ReactDom",
    },
    {
      id: 2,
      name: "Karen",
      phone: 138198313,
      email: "karen@juan.com",
      company: "ReactDom",
    },
    {
      id: 3,
      name: "Josue",
      phone: 31983913,
      email: "josue@juan.com",
      company: "ReactDom",
    },
    {
      id: 4,
      name: "Miguel",
      phone: 319381983,
      email: "miguel@juan.com",
      company: "ReactDom",
    },
    {
      id: 5,
      name: "Pedro",
      phone: 1398198938,
      email: "pedro@juan.com",
      company: "ReactDom",
    },
  ];
  return clients;
}

const Index = () => {
  const data = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3 font-bold">Manage your Clients</p>

      {data.length ? (
        <table className="mt-5 table-auto bg-white w-full">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="w-1/4 py-2">Name</th>
              <th className="w-1/4 py-2">Contact</th>
              <th className="w-1/4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((client) => (
              <Client key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-10 text-center"> No clients yet</p>
      )}
    </>
  );
};

export default Index;
