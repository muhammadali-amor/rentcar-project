import React from 'react';
import Hero from "../pages/Hero.jsx";
import About from "../pages/About.jsx";
import Services from "../pages/Services.jsx";
import CarList from "../pages/CarList.jsx";
import Testimonial from "../pages/Testimonial.jsx";
import AppStoreBanner from "../pages/AppStoreBanner.jsx";
import Contact from "../pages/Contact.jsx";

const Menu = ({theme}) => {
    return (
        <div>
            <Hero theme={theme}/>
            <About/>
            <Services/>
            <CarList/>
            <Testimonial/>
            <AppStoreBanner/>
            <Contact/>

        </div>
    );
};

export default Menu;