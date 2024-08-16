import Flashcard from "../models/Flashcard.js";

export const getAllFlashcards = async (options = {}) => {
    try {
      const { limit = 10, offset = 0 } = options;
      const flashcards = await Flashcard.findAll({
        attributes: ['id', 'question', 'answer'], // select specific fields
        limit: Number(limit), // Ensure these are numbers
        offset: Number(offset),
      });
      return flashcards;
    } catch (error) {
      console.error(error);
      throw error;
    }
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
