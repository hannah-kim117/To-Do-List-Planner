import React from 'react';
import { Link } from 'react-router-dom';



// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav className='App-nav'>
        <Link to="/">Home</Link>
        <Link to="/log">Log Tasks</Link>
        <Link to="../topics">Topics</Link>
    </nav>
  );
}

export default Navigation;
