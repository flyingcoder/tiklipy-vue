import express from 'express';
import Post from '../../models/Post.js';

const router = express.Router();
const PostModel = new Post();

router.post('/', async (req, res) => {
    const resource = await PostModel.addPost(req.body);
});

router.get('/', async (req, res) => {
    const blogs = await PostModel.getPost();
    res.json({ blogs: blogs });
});


export default router;