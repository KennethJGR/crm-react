import React from "react";
import { useLoaderData } from "react-router-dom";
import Client from "../components/Client";
import { getClients } from "../data/Clients";

export function loader() {
  const data = getClients();
  return data;
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
