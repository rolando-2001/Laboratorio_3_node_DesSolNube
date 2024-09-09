import { Router } from 'express';
import { users } from '../database/data-user.js';


const router = Router();

router.get('/', (req, res) => {
    res.json({ message: users });
});


export default router;