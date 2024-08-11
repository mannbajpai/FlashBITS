import { useContext } from 'react';
import { FlashCardContext } from '../context/FlashCardContext';
import FlashCardItem from './FlashCardItem';

const FlashCardList = () => {
    const { flashcards, loading } = useContext(FlashCardContext);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashcards.map(flashcard => (
                <FlashCardItem key={flashcard.id} flashcard={flashcard} />
            ))}
        </div>
    );
};

export default FlashCardList;
