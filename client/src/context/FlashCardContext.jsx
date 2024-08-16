import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import api from "../api";

export const FlashCardContext = createContext();

export const FlashCardProvider = ({ children }) => {
    const [flashcards, setFlashcards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit] = useState(10); // Limit the number of flashcards per page
    const [offset, setOffset] = useState(0); // Offset for pagination

    useEffect(() => {
        const fetchFlashcards = async () => {
            try {
                const response = await api.get(
                    `/flashcards`,
                    { params: { limit, offset } }
                );
                setFlashcards(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch flashcards", error);
                setLoading(false);
            }
        };

        fetchFlashcards();
    }, [offset, limit]);

    return (
        <FlashCardContext.Provider
            value={{ flashcards, setFlashcards, loading, setOffset }}
        >
            {children}
        </FlashCardContext.Provider>
    );
};

FlashCardProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
