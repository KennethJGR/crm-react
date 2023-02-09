import React from "react";
import Forms from "../components/Forms";
import Error from "../components/Error";
import { getClient, updateClient } from "../data/Clients";
import {
    useNavigate,
    Form,
    useLoaderData,
    useActionData,
    redirect,
} from "react-router-dom";

export async function loader({ params }) {
    const client = await getClient(params.id);
    if (Object.values(client).length === 0) {
        throw new Response("Client not found", {
            status: 404,
            statusText: "Client not found",
        });
    }

    return client;
}



export async function action({ params, request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const email = formData.get("email");

    //validation
    const errors = [];

    if (Object.values(data).includes("")) {
        errors.push("All fields are required");
    }

    let regex = new RegExp(
        "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );

    if (!regex.test(email)) {
        errors.push("Invalid email");
    }

    if (Object.keys(errors).length) {
        return errors;
    }

    await updateClient(params.id, data);

    return redirect("/");
}


const EditClient = () => {
    const navigate = useNavigate();
    const client = useLoaderData();
    const errors = useActionData();

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
            <p className="mt-3 font-bold">
                Edit the fields and click on the save button
            </p>

            <div className="flex justify-end">
                <button
                    className="bg-blue-700 text-white px-3 py-1 font-bold uppercase rounded"
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
                {errors?.length &&
                    errors.map((error, index) => <Error key={index}>{error} </Error>)}

                <Form method="POST" noValidate>
                    <Forms client={client} />

                    <input
                        type="submit"
                        className="mt-5 w-full bg-blue-700 text-white px-3 py-1 font-bold uppercase rounded"
                        value="Save Changes"
                    />
                </Form>
            </div>
        </>
    );
};

export default EditClient;
