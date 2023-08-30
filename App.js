// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages (but only the ones you need).
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design.
// If your schema requires SHORT data input, then use the TABLE design.

import TasksPage from './pages/TasksPage';
// import AddTaskPageForm from './pages/AddTaskPageForm';
import AddTaskPageTable from './pages/AddTaskPageTable';
// import EditTaskPageForm from './pages/EditTaskPageForm';
import EditTaskPageTable from './pages/EditTaskPageTable';

// import products from './data/products.js';
import HomePage from './pages/HomePage.js';
import TopicsPage from './pages/TopicsPage.js';

// import CreatePage from './pages/CreatePage.js';


// Define the function that renders the content in Routes, using State.
function App() {

  const [task, setTaskToEdit] = useState([])

  return (
    <div className='App'>
      <BrowserRouter>

          <header className='App-header'>
            <h1>Hannah Kim</h1>
            <p>Portfolio project for CS 290 that represents a planner of tasks using React.</p>
          </header>

          <Navigation />

          <main>
            <section className='App-article'>
                <Routes> 
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/create" element={<AddMoviePageForm />} />  */}
                    <Route path="/create" element={<AddTaskPageTable />} /> 
                    {/* <Route path="/update" element={<EditTaskPageForm movieToEdit={task} />} /> */}
                    <Route path="/update" element={<EditTaskPageTable taskToEdit={task} />} />
                    <Route path="/topics" element={<TopicsPage />} />
                    <Route path="/log" element={<TasksPage />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>2023 Hannah Kim</p>
          </footer>

      </BrowserRouter>
    </div>
  );
}

export default App;