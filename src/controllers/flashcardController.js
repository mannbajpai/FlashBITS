import * as FlashcardService from '../services/flashcardService.js'

export const getFlashcards = async (req, res) => {
    try {
        const flashcards = await FlashcardService.getAllFlashcards();
        res.status(200).json({ status: 'success', data: flashcards });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getFlashcard = async (req, res) => {
    try {
        const flashcard = await FlashcardService.getFlashcardById(req.params.id);
        if (flashcard) {
            res.status(200).json({ status: 'success', flashcard });
        } else {
            res.status(404).json({ error: 'Flashcard not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createFlashcard = async (req, res) => {
    try {
        const flashcard = await FlashcardService.createFlashcard(req.body);
        res.status(200).json({ status: "success", flashcard });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateFlashcard = async (req, res) => {
    try {
        const flashcard = await FlashcardService.updateFlashcard(req.params.id, req.body);
        if (flashcard) {
            res.status(200).json({ status: 'success', flashcard });
        } else {
            res.status(404).json({ error: 'Flashcard not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteFlashcard = async (req, res) => {
    try {
        const result = await FlashcardService.deleteFlashcard(req.params.id);
        if (result) {
            res.status(200).json({ status: 'success', message: 'Flashcard deleted' });
        } else {
            res.status(404).json({ error: 'Flashcard not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
