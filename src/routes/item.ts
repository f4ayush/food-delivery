// src/routes/itemRoutes.ts
import express from 'express';
import { ItemController } from '../controllers/Item';

const router = express.Router();
const itemController = new ItemController();

router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);

export default router;
