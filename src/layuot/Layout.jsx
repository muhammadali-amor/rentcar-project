import React, {useEffect, useState} from 'react';
import AOS from "aos";
import './Layout.css'
import "aos/dist/aos.css";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import Menu from "../component/Menu.jsx";

const Layout = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);
    return (
        <div>
            <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
                <Navbar theme={theme} setTheme={setTheme}/>
                <Menu theme={theme}/>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;