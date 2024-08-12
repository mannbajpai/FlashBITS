import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { useContext } from "react";
import api from "../api";
import { FlashCardContext } from "../context/FlashCardContext";
const FlashCardItem = ({ flashcard }) => {
    const {flashcards, setFlashcards } = useContext(FlashCardContext);
    const handleDelete  = async () => {
        try {
            const res = await api.delete(`/flashcards/${flashcard.id}`);
            if (res.data.status === 'success') {
                setFlashcards(flashcards.filter((flash)=> flash.id !== flashcard.id))
            }
        } catch (error) {
            throw new Error("Error deleting flashcard", error);
        }
     
    }
    return (
        <div className="card bg-neutral shadow-xl p-6">
            <div className="card-body">
                <h2 className="card-title text-2xl">{flashcard.question}</h2>
                <div className="flex justify-between mt-4">
                    <Link to={`/admin/edit/${flashcard.id}`} className="btn btn-accent rounded-3xl w-24">Edit</Link>
                    <button onClick={handleDelete} className="btn btn-error rounded-3xl w-24">Delete</button>
                </div>
            </div>
        </div>
    );
};

FlashCardItem.propTypes = {
    flashcard: PropTypes.object.isRequired,
}

export default FlashCardItem;
