import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../post/Post';
const Posts = () => {
    const posts = useLoaderData();


    return (
        <div>
            <h2>Post {posts.length}</h2>

            <div>
                {
                    posts.map(post=><Post key={post.id} userId={post.userId} title={post.title} ID={post.id}  ></Post>)
                }
            </div>
       
        </div>
    );
};

export default Posts;