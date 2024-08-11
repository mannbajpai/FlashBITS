const FlashCardNavigation = ({ prevCard, nextCard }) => {
    return (
        <div className="flex justify-between mt-6">
            <button onClick={prevCard} className="btn btn-secondary">Previous</button>
            <button onClick={nextCard} className="btn btn-secondary">Next</button>
        </div>
    );
};

export default FlashCardNavigation;
