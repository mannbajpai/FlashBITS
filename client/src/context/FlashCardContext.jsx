import { createContext, useState, useEffect } from 'react';
import api from '../api';

export const FlashCardContext = createContext();

export const FlashCardProvider = ({ children }) => {
    const [flashcards, setFlashcards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFlashcards = async () => {
            try {
                const response = await api.get('/flashcards');
                setFlashcards(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch flashcards', error);
                setLoading(false);
            }
        };

        fetchFlashcards();
    }, []);

    return (
        <FlashCardContext.Provider value={{ flashcards, loading }}>
            {children}
        </FlashCardContext.Provider>
    );
};


