import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { Container } from 'react-bootstrap';
import React, { use } from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Header() {
    const [theme, setTheme] = useState("light");

    const handleClick = () => { 
        toggleTheme(theme, setTheme);
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }, [theme]);

    useEffect(() => {
        var curTheme = localStorage.getItem('theme');

        // check if theme is set in local storage
        if (curTheme) {
            setTheme(curTheme);
        }
        // detect system theme
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } 
        else {    
            setTheme('light');
        }

        console.log(theme);
    }, []);

    return (
        <>
            <Head>
                <title>portfolio.faditawfig.com</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header >
                <Navbar expand="md"  className="navbar-main">
                    <Container>
                        <Link className="navbar-brand" href="/">portfolio.faditawfig.com</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse>
                            <Nav className="me-auto">
                                <Link className="nav-link" href="/projects">Projects</Link>
                                <Link className="nav-link" href="/resume">Resume</Link>
                                <Link className="nav-link" href="https://faditawfig.com">Consulting</Link>
                                <Link className="nav-link" href="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Button 
                            onClick={ handleClick }
                            variant={"outline" + (theme === 'dark' ? '-light' : '-dark')}
                        >
                            { theme === 'dark' ?  <MdDarkMode/> : <MdOutlineDarkMode/>}
                        </Button>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}

function toggleTheme(theme, setTheme) {
    console.log(theme);

    var curTheme = localStorage.getItem('theme');
    
    if (curTheme === 'light') {
        localStorage.setItem('theme', 'dark');
        setTheme('dark');
    } else {
        localStorage.setItem('theme', 'light');
        setTheme('light');
    }
}
