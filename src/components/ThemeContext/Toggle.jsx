import React from 'react';
import { useContext } from 'react';
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { ThemeContext } from './ThemeContext';
const Toggle = () => {
    const [theme, setTheme ] = useContext(ThemeContext);
    return theme === "dark" ? <li><BsFillMoonFill onClick={() => setTheme(theme === "dark" ? "light":"dark")} className="text-white"/></li>:<li><FaSun className='text-white' onClick={() => setTheme(theme === "dark" ? "light":"dark")} /></li>
};

export default Toggle;