// Models for the Movie Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Connection to the server was unsuccessful.' });
    } else  {
        console.log('Connection to the MongoDB Planner collection was successful!');
    }
});

// SCHEMA: Define the collection's schema.
const plannerSchema = mongoose.Schema({
	title:    { type: String, required: true },
	count:   { type: Number, required: true },
    date:     { type: Date, required: true}
});

// Compile the model from the schema 
// by defining the collection name "tasks".
const tasks = mongoose.model('Task', plannerSchema);


// CREATE model *****************************************
const createPlanner = async (title, count, date) => {
    const aTask = new tasks({ 
        title: title, 
        count: count, 
        date: date 
    });
    return aTask.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrievePlanners = async () => {
    const query = tasks.find();
    return query.exec();
}

// RETRIEVE by ID
const retrievePlannerByID = async (_id) => {
    const query = tasks.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deletePlannerById = async (_id) => {
    const result = await tasks.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updatePlanner = async (_id, title, count, date) => {
    const result = await tasks.replaceOne({_id: _id }, {
        title: title, 
        count: count, 
        date: date 
    });
    return { 
        _id: _id,
        title: title, 
        count: count, 
        date: date 
    }
}

// EXPORT the variables for use in the controller file.
export { createPlanner, retrievePlanners, retrievePlannerByID, updatePlanner, deletePlannerById }