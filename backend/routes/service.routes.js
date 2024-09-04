import express from 'express';
import {protectRoute} from '../middleware/protectRoute.js';
import {qrService,allQr,deleteQr} from '../controller/service.controller.js';

const router = express.Router();

router.post('/qrservice',protectRoute,qrService);
router.get('/allqr',protectRoute,allQr);
router.post('/deleteqr/:id',protectRoute,deleteQr);


export default router;