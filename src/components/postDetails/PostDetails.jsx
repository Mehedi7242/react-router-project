import React from 'react';
import { useLoaderData, useNavigate ,useParams } from 'react-router-dom';


const PostDetails = () => {
    const post = useLoaderData();
    const {id ,title,body} = post;

    const {postId} = useParams();
    console.log(postId)
    

    const navigate = useNavigate();

    const handleGoBack = () =>{

        navigate(-1);
    }

    return (
        <div>

            <h3>post Details</h3>

            <h3>{id}</h3>
            <h3>{title}</h3>
            <h3>{body}</h3>
            <button onClick={handleGoBack}>go back</button>
            
        </div>
    );
};

export default PostDetails;