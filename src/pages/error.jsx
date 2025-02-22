/* eslint-disable no-unused-vars */
import React from 'react'
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    
  return (
        <div>
            <h1>Opps!! Error occur..</h1>
            {error && <p>{error.data}</p>}
        </div>
    )
}

export default Error
