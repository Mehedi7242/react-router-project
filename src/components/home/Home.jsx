import React from 'react';
import Header from '../header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../footer/Footer';

const Home = () => {

    const navigation = useNavigation();

    return (
        <div>
            <Header></Header>
                {
                    navigation.state === 'loading' ?
                    <p>Loading...</p>:
                    
                    <Outlet></Outlet>
                }


            <Footer></Footer>


        </div>
    );
};

export default Home;