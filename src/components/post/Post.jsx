import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({userId,title,ID}) => {
    const navigate = useNavigate();

    const handleShowDetails = () =>{
        navigate(`/post/${ID}`)
    }





    return (
        <div>
            <h1>{userId}</h1>
            <h2>{title}</h2>
            <h3>ID : {ID}</h3>
            <Link to={`/post/${ID}`} > Post details</Link>
            
            <button onClick={handleShowDetails}>click to see details</button>

        </div>
    );
};

export default Post;