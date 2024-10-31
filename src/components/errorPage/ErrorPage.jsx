import {useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const ErrorPage = () => {

    const error = useRouteError();



    console.log(error)


    return (
        <div>
            <h2>Opps !!!</h2>

            <p>{error.statusText && error.status}</p>

            <Link to = {'/'}> <button>Go to  Home </button> </Link>
            
        </div>
    );
};

export default ErrorPage;