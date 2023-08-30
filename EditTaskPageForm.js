import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditTaskPageForm = ({ taskToEdit }) => {
 
    const [title, setTitle]       = useState(taskToEdit.title);
    const [year, setYear]         = useState(taskToEdit.year);
    const [language, setLanguage] = useState(taskToEdit.language);
    
    const redirect = useNavigate();

    const editTask = async () => {
        const response = await fetch(`/tasks/${taskToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                year: year, 
                language: language
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`helpful editing message`);
        } else {
            const errMessage = await response.json();
            alert(`helpful editing message ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit a task</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which task are you adding?</legend>
                    <label for="title">Task title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        id="title" />
                    
                    <label for="year">Year released</label>
                    <input
                        type="number"
                        value={year}
                        onChange={e => setYear(e.target.value)} 
                        id="year" />

                    <label for="language">Language</label>
                    <input
                        type="text"
                        value={language}
                        onChange={e => setLanguage(e.target.value)} 
                        id="language" />

                    <label for="submit">
                    <button
                        onClick={editTask}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditTaskPageForm;