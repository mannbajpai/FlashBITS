import { useState, useContext } from 'react';
import { FlashCardContext } from '../context/FlashCardContext';
import FlashCard from '../components/FlashCard';
import FlashCardNavigation from '../components/FlashCardNavigation';
import Navbar from '../components/Navbar';
const Home = () => {
    const { flashcards } = useContext(FlashCardContext);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    };

    if (!flashcards.length) return <div>No Flashcards Available</div>;

    return (
        <>
        <Navbar/>
        <div className="container mx-auto mt-10 text-center">
            <FlashCard flashcard={flashcards[currentIndex]} />
            <FlashCardNavigation prevCard={prevCard} nextCard={nextCard} />
        </div>
        </>
    );
};

export default Home;
