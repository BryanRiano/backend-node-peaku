import { Router } from 'express';
const router = Router();

import { createDelivery } from '../controllers/delivery.controller';

router.route('/')
    .post(createDelivery);

export default router;
