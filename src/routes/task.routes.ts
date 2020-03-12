import { Router } from 'express';
const router = Router();

import { getTasks } from '../controllers/task.controller';

router.route('/:idconductor/:fecha')
    .get(getTasks);

export default router;