import React from "react";
import { useNavigate, Form, useActionData } from "react-router-dom";
import Forms from "../components/Forms";
import Error from "../components/Error";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

const email = formData.get("email");

  //validation
  const errors = [];

  if (Object.values(data).includes("")) {
    errors.push("All fields are required");
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if (!regex.test(email)) {
    errors.push("Invalid email");
  }

  if (Object.keys(errors).length) {
    return errors;
  }
}

const NewClient = () => {
  const navigate = useNavigate();
  const errors = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3 font-bold">Complete all fields</p>

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

        <Form method="POST"
        noValidate>
          <Forms />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-700 text-white px-3 py-1 font-bold uppercase rounded"
            value="Save"
          />
        </Form>
      </div>
    </>
  );
};

export default NewClient;
