import { Router } from 'express';
import * as flashcardController from '../controllers/flashcardController.js';
import * as authController from '../controllers/authController.js';

const router = Router();

router.get('/flashcards', flashcardController.getFlashcards);
router.get('/flashcards/:id', flashcardController.getFlashcard);

router.post('/flashcards', authController.protect, flashcardController.createFlashcard);
router.patch('/flashcards/:id', authController.protect, flashcardController.updateFlashcard);
router.delete('/flashcards/:id', authController.protect, flashcardController.deleteFlashcard);

export default router;
