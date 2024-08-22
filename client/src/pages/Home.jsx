import { useState, useEffect, useContext } from 'react';
import { FlashCardContext } from '../context/FlashCardContext';
import FlashCard from '../components/FlashCard';
import FlashCardNavigation from '../components/FlashCardNavigation';
import Navbar from '../components/Navbar';
import api from '../api';
import { LoaderSpinner, LoadingDots } from '../components/Loader';

const Home = () => {
    const { setFlashcards, loading:initialLoading } = useContext(FlashCardContext);
    const [flashcards, setLocalFlashcards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [limit] = useState(10); // Limit the number of flashcards per page
    const [offset, setOffset] = useState(0); // Offset for pagination
    const [loading, setLoading] = useState(false); //
    useEffect(() => {
        // Fetch flashcards based on the current offset and limit
        const fetchFlashcards = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/flashcards`, {
                    params: { limit, offset },
                });
                if (response.data.status === 'success') {
                    setLocalFlashcards(response.data.data);
                    setFlashcards(response.data.data); // Set context flashcards
                    setCurrentIndex(0); // Reset index when new flashcards are loaded
                }
            } catch (error) {
                console.error('Failed to fetch flashcards:', error);
            }
            setLoading(false);
        };

        fetchFlashcards();
    }, [offset, limit, setFlashcards]);

    const nextCard = () => {
        setFlipped(false);
        if (currentIndex < flashcards.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
            setCurrentIndex(0); // Reset to the first flashcard
        }
    };

    const prevCard = () => {
        setFlipped(false);
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        } else if (offset > 0) {
            setOffset((prevOffset) => prevOffset - limit); // Load previous set of flashcards
        }
    };

    if (!flashcards.length) return <div>No Flashcards Available</div>;

    return (
        <>
            <Navbar />
            <div className="w-full text-center flex flex-col items-center justify-center min-h-[70vh]">
                {initialLoading ? <LoaderSpinner /> :
                    <>
                        {loading ?<LoadingDots/>:<FlashCard flashcard={flashcards[currentIndex]} flipped={flipped} setFlipped={setFlipped} />}
                        <FlashCardNavigation prevCard={prevCard} nextCard={nextCard} />
                    </>}
            </div>
        </>
    );
};

export default Home;
