import PropTypes from "prop-types"
const FlashCardNavigation = ({ prevCard, nextCard }) => {
    return (
        <div className="w-full max-w-2xl mt-10 px-10 flex flex-row justify-between">
            <button onClick={prevCard} className="btn btn-accent rounded-full w-1/5 min-w-sm">Previous</button>
            <button onClick={nextCard} className="btn btn-accent rounded-full w-1/5 min-w-sm">Next</button>
        </div>
    );
};

FlashCardNavigation.propTypes = { 
    prevCard: PropTypes.func,
    nextCard: PropTypes.func,
}
export default FlashCardNavigation;
