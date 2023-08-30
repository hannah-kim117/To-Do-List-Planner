// Controllers for the Planner Collection

import 'dotenv/config';
import express from 'express';
import * as tasks from './planner-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/tasks', (req,res) => { 
    tasks.createPlanner(
        req.body.title, 
        req.body.count, 
        req.body.date
        )
        .then(task => {
            res.status(201).json(task);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Server cannot process the request due to client error.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/tasks', (req, res) => {
    tasks.retrievePlanners()
        .then(task => { 
            if (task !== null) {
                res.json(task);
            } else {
                res.status(404).json({ Error: 'The page cannot be found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Server cannot process the request due to client error.' });
        });
});


// RETRIEVE by ID controller
app.get('/tasks/:_id', (req, res) => {
    tasks.retrievePlannerByID(req.params._id)
    .then(task => { 
        if (task !== null) {
            res.json(task);
        } else {
            res.status(404).json({ Error: 'The page cannot be found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Server cannot process the request due to client error.' });
    });

});


// UPDATE controller ************************************
app.put('/tasks/:_id', (req, res) => {
    tasks.updatePlanner(
        req.params._id, 
        req.body.title, 
        req.body.count, 
        req.body.date
    )
    .then(task => {
        res.json(task);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Server cannot process the request due to client error.' });
    });
});


// DELETE Controller ******************************
app.delete('/tasks/:_id', (req, res) => {
    tasks.deletePlannerById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'Delete was successful: No content will be returned.' });
            } else {
                res.status(404).json({ Error: 'The page cannot be found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Unable to process request.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});