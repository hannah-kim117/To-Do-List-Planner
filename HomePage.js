import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function HomePage() {
    return (
       <>
            <h2>CS 290 Web Dev Portfolio</h2>
            <article>
                <p>
                    I aspire to become as a software enginner / software developer that can continuously improve my technical skills
                    and problem-solving skills but also be able to achieve a healthy work-life balance. 
                </p>
            </article>

            <article>
                <h1>Some Technologies Used:</h1>
                <p>
                <dl>
                    <dt><strong>React</strong></dt>
                    <dd>React serves as a frontend framework for developing web applications. These applications are coded in JavaScript and incorporate React-specific syntax.
                        Some important concepts underlying React applications are: 
                        Pages are built with components instead of HTML. 
                        Components are functions that return React elements. 
                        Pages are updated by changing state not by directly changing HTML.
                        Single Page Applications (SPA) are built rather than applications with multiple HTML pages.
                    </dd>
                    <dt><strong>JSX</strong></dt>
                    <dd>JSX is a combination of JavaScript and XML, which is a markup language which looks similar to HTML.
                        JSX allows defining of new components, which can be used as tags along with existing HTML tags. 
                        One difference with HTML is that in JSX every tag must be closed with either '<componentName> </componentName>' or with '<componentName />'.
                    </dd>
                    <dt><strong>MERN App</strong></dt>
                    <dd> The MERN App performs all four CRUD operations. 
                    MERN is an acronym that represents a set of technologies often used together for building web applications. It stands for:
                    M: MongoDB - A NoSQL database that stores data in a JSON-like format, making it suitable for handling large volumes of unstructured or semi-structured data.
                    E: Express.js - A web application framework for Node.js that simplifies the process of building robust and scalable APIs and server-side applications.
                    R: React - A JavaScript library for building user interfaces, particularly focused on creating dynamic and responsive single-page applications (SPAs).
                    N: Node.js - A JavaScript runtime environment that allows developers to execute JavaScript code on the server side, enabling server-side scripting and providing a platform for building scalable network applications.
                    The MERN stack is popular for its ability to facilitate the development of modern, efficient, and full-stack web applications. 
                    MongoDB serves as the database, Express.js handles the server-side logic and API development, React is used for creating interactive user interfaces, and Node.js powers the server-side environment. 

                    </dd>

                    <dt><strong></strong></dt>
                    <dd>
                        
                    </dd>
                </dl>
                </p>
            </article>
</>
    );
}

export default HomePage;