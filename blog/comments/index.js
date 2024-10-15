const express=require('express');
const { randomBytes}=require('crypto');
const bodyParser=require('body-parser');
const cors=require('cors')
const app=express();
app.use(bodyParser.json()); 

const commentsByPostId={};
app.use(cors())
app.get('/posts/:id/comments' ,(req,res)=>{
    res.send(commentsByPostId[req.params.id] || []);

});
app.post('/posts/:id/comments', (req, res) => {
    // Generate a random ID for the new comment
    const commentId = randomBytes(4).toString('hex'); 
    
    const { content } = req.body; 
    
    // Get the array of comments for the post with the given 'id' (from the URL parameters)
    // If no comments exist for this post, use an empty array
    const comments = commentsByPostId[req.params.id] || []; // Find comments for the post ID, or create an empty array if none exist yet
    
    // Add the new comment (an object with 'id' and 'content') to the array of comments
    comments.push({ id: commentId, content }); // Push the new comment object into the comments array
    
    // Update the comments for the post with the given ID
    commentsByPostId[req.params.id] = comments; // Save the updated array of comments back to the commentsByPostId object
    
    // Respond with status 201 (Created) and send the updated list of comments
    res.status(201).send(comments); // Send a response with the updated comments list
 });
 
app.listen(4001,()=>{
    console.log('comments app run in 4001')
})