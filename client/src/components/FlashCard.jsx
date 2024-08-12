import PropTypes from "prop-types"


const FlashCard = ({ flashcard, flipped, setFlipped  }) => {

    return (
        <div className="card cursor-pointer w-full h-[40vh] max-h-xl max-w-2xl bg-neutral shadow-xl p-6" onClick={() => setFlipped(!flipped)}>
            <div className={`card-body rounded-xl text-center ${flipped ? 'bg-accent' : 'bg-primary'}`}>
                <h2 className={`${flipped ? 'text-2xl font-semibold':'text-3xl font-extrabold'}?`}>{flipped ? flashcard.answer : flashcard.question}</h2>
            </div>
        </div>
    );
};

FlashCard.propTypes = {
    flashcard: PropTypes.object.isRequired,
    flipped: PropTypes.bool,
    setFlipped: PropTypes.func,
}

export default FlashCard;
