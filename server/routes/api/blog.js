import express from 'express';
import Post from '../../models/Blogs.js';

const router = express.Router();
const PostModel = new Post();

router.post('/', async (req, res) => {
    const resource = await PostModel.addPost(req.body);
});

router.get('/', async (req, res) => {
    const blogs = await PostModel.getPosts();
    res.json({ blogs: blogs });
});

router.get('/:slug', async (req, res) => {
    const slug = req.params.slug;
    const blogs = await PostModel.getPostBySlug(slug);
    res.json({ blogs: blogs });
});


export default router;