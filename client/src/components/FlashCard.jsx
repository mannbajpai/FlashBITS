import { useState } from 'react';

const FlashCard = ({ flashcard }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="card w-96 bg-neutral shadow-xl p-6" onClick={() => setFlipped(!flipped)}>
            <div className={`card-body text-center ${flipped ? 'bg-accent' : 'bg-primary'}`}>
                <h2 className="card-title">{flipped ? flashcard.answer : flashcard.question}</h2>
            </div>
        </div>
    );
};

export default FlashCard;
