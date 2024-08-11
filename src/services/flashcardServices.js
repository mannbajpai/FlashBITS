import Flashcard from "../models/Flashcard.js";

export const getAllFlashcards = async () => {
    return await Flashcard.findAll();
};

export const getFlashcardById = async (id) => {
    return await Flashcard.findByPk(id);
};

export const createFlashcard = async (data) => {
    return await Flashcard.create(data);
};

export const updateFlashcard = async (id, data) => {
    const flashcard = await Flashcard.findByPk(id);
    if (flashcard) {
        return await flashcard.update(data);
    }
    return null;
};

export const deleteFlashcard = async (id) => {
    const flashcard = await Flashcard.findByPk(id);
    if (flashcard) {
        return await flashcard.destroy();
    }
    return null;
};
