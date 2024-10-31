import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Home from './components/Home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact';
import Users from './components/users/Users';
import UserDetails from './components/userDetails/UserDetails.jsx';
import Posts from './components/posts/Posts.jsx';
import PostDetails from './components/postDetails/PostDetails.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,

    errorElement:<ErrorPage></ErrorPage>,

    children: [
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>

      },

      {
        path:'/user/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },

      {
        path:'/posts',
        loader:()=>fetch(`https://jsonplaceholder.typicode.com/posts`),
        element:<Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      }

    ]


  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
