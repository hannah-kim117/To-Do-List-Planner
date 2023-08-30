import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddTaskPageForm = () => {

    const [title, setTitle]       = useState('');
    const [year, setYear]         = useState('');
    const [language, setLanguage] = useState('');
    
    const redirect = useNavigate();

    const addTask = async () => {
        const newTask = { title, year, language };
        const response = await fetch('/tasks', {
            method: 'post',
            body: JSON.stringify(newTask),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`New resource has been successfully created and is now ready for interaction.`);
            redirect("/");
        } else {
            alert(`Server was not able to successfully process the request. = ${response.status}`);
            redirect("/");
        }
    };


    return (
        <>
        <article>
            <h2>Add a Task</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which Task are you adding?</legend>
                    <label for="title">Task title</label>
                    <input
                        type="text"
                        placeholder="Title of the Task"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        id="title" />
                    
                    <label for="year">Year released</label>
                    <input
                        type="number"
                        value={year}
                        placeholder="Year of the movie"
                        onChange={e => setYear(e.target.value)} 
                        id="year" />

                    <label for="language">Language</label>
                    <input
                        type="text"
                        placeholder="Primary language of the movie"
                        value={language}
                        onChange={e => setLanguage(e.target.value)} 
                        id="language" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addTask}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddTaskPageForm;