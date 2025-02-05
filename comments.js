// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments
const comments = require('./comments');

// Create a GET route that returns all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a POST route that adds a new comment
app.post('/comments', (req, res) => {
    const newComment = {
        id: comments.length + 1,
        body: 'This is a new comment'
    };
    comments.push(newComment);
    res.json(newComment);
});

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});