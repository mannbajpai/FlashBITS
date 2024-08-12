import PropTypes from "prop-types";

const FlashCard = ({ flashcard, flipped, setFlipped }) => {
    return (
        <div
            className="perspective cursor-pointer w-full h-[40vh] max-h-xl max-w-2xl p-6"
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`relative w-full h-full transition-transform duration-500 transform ${flipped ? 'rotate-y-180' : ''}`}
            >
                <div
                    className={`absolute inset-0 backface-hidden flex items-center justify-center card-body rounded-xl text-center bg-primary`}
                >
                    <h2 className="text-3xl font-extrabold">{flashcard.question}</h2>
                </div>
                <div
                    className={`absolute inset-0 backface-hidden flex items-center justify-center card-body rounded-xl text-center bg-accent transform rotate-y-180`}
                >
                    <h2 className="text-2xl font-semibold">{flashcard.answer}</h2>
                </div>
            </div>
        </div>
    );
};

FlashCard.propTypes = {
    flashcard: PropTypes.object.isRequired,
    flipped: PropTypes.bool,
    setFlipped: PropTypes.func,
};

export default FlashCard;
