import express from 'express';
import Post from '../../models/Post.js';

const router = express.Router();
const PostModel = new Post();

router.post('/', async (req, res) => {
    const resource = await PostModel.addPost(req.body);
});

export default router;