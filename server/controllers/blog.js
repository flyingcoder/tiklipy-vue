import express from 'express';
import Post from '../models/Blogs.js';

const router = express.Router();
const PostModel = new Post();

router.post('/', async (req, res) => {
    const resource = await PostModel.addPost(req.body);
});

router.get('/', async (req, res) => {
    const blogs = await PostModel.getPosts();
    res.json({ blogs: blogs });
});

router.get('/post', async (req, res) => {
    try {
        const slug = req.query.slug;
        const data = await PostModel.getPostBySlug(slug);
        res.json({ data: data });
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong', payload: req.body });
    }
});


export default router;