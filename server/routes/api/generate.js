import express from 'express';
import GenerateModel from '../../models/Generate.js';

const router = express.Router();
const generate = new GenerateModel();

router.put('/lesson-plan', async (req, res) => {
    res.json({msg: 'this is for lesson plan generation'});
});

export default router;