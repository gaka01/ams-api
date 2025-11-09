import express from 'express';
import { Constants } from '../constants.js';
const router = express.Router();

router.get('/', (req, res) => {
    return res.json(Constants.metadata);
});

export default router;