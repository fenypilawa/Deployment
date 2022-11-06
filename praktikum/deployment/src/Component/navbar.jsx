import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [home, setHome] = useState(false);
    const [css, setCss] = useState(false);
    const [html, setHtml] = useState(false);
    const handleactiveHome=()=>{
        setHome(true);
        setCss(false);
        setHtml(false);
    }
    const handleactivecss=()=>{
        setCss(true);
        setHome(false);
        setHtml(false);
    }
    const handleactivehtml=()=>{
        setHtml(true);
        setHome(false);
        setCss(false);
    }
    // useEffect(()=>{
    //     handleactiveHome();
    // }, [home])
    // useEffect(()=>{
    //     handleactiveboostrap();
    // }, [bootstrap])
    console.log(home, css, html,)

  return (
    <div className='mt-2'>
        <ul className="nav nav-tabs fw-bold font-monospace text-decoration-none d-flex justify-content-center">
            <li className="nav-item ">
                <Link className={home ? "nav-link active" : "nav-link"} aria-current={home ? "page" : ""} onClick={handleactiveHome} to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className={css ? "nav-link active" : "nav-link"} aria-current={css ? "page" : ""}  onClick={handleactivecss} to="/css">CSS</Link>
            </li>
            <li className="nav-item">
                <Link className={html ? "nav-link active" : "nav-link"} aria-current={html ? "page" : ""}  onClick={handleactivehtml} to="/html">HTML</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
