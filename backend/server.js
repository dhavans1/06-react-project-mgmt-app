const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// initiate
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/projectMgmt")
.then(() => console.log('Log: MongoDB connection established'))
.catch(err => console.log('Log: Error - MongoDB connection failed, ', err));

// Create Schema and Model
const projectSchema = new mongoose.Schema({
    pID: Number,
    title: String,
    desc: String,
    goal: String,
    tasks: [
        {
            taskID: Number,
            pID: Number,
            taskDesc: String,
            priority: String,
            status: String
        }
    ]
});

const Project = mongoose.model('Project', projectSchema);

// API Route: Get Projects
app.get("/projects", async (req, res) => {
    try {
        console.log('Log: Fetching all projects');
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({error: 'Error fetching projects'});
    }
});

// API Route: Add new project
app.post("/projects/add-project", async (req, res) => {
    try {
        console.log('Log: Request received for POST operation - ', req.body);
        const project = new Project(req.body);
        const savedProject = await project.save();
        res.json(savedProject);
    } catch(err) {
        console.log('Log: Error with POST operation - add-project - ', err);
        res.status(500).json({error: 'Error saving data'});
    }
});

// API Route: Update Project

// API Router: Delete Project
app.delete("/projects/delete", async (req, res) => {
    try {
        const response = await Project.findOneAndDelete({
            pID: req.query.pID
        });

        if (!response) {
            res.status(400).json({Error: 'Project not found'});
        }

        res.json(response);
    } catch (err) {
        console.log('Log: Error deleting project - ', req.body);
        res.status(500).json({Error: 'Error deleting project'});
    }
});

app.listen(5000, () => console.log('Log: server running on port 5000'));