import { useState, useContext } from 'react';
import { FlashCardContext } from '../context/FlashCardContext';
import FlashCard from '../components/FlashCard';
import FlashCardNavigation from '../components/FlashCardNavigation';
import Navbar from '../components/Navbar';
const Home = () => {
    const { flashcards } = useContext(FlashCardContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const nextCard = () => {
        setFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };

    const prevCard = () => {
        setFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    };

    if (!flashcards.length) return <div>No Flashcards Available</div>;

    return (
        <>
        <Navbar/>
        <div className="w-full text-center flex flex-col items-center justify-center min-h-[70vh]">
            <FlashCard flashcard={flashcards[currentIndex]} flipped={flipped} setFlipped={setFlipped}/>
            <FlashCardNavigation prevCard={prevCard} nextCard={nextCard} />
        </div>
        </>
    );
};

export default Home;
