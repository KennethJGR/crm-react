import React from "react";

const Error = ({ children }) => {
    return (
        <div className="bg-red-600  text-white p-3 my-4 font-bold rounded uppercase text-center">
            {children}
        </div>
    );
};

export default Error;
