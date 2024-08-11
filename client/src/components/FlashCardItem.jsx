import { Link } from 'react-router-dom';

const FlashCardItem = ({ flashcard }) => {
    return (
        <div className="card bg-neutral shadow-xl p-6">
            <div className="card-body">
                <h2 className="card-title">{flashcard.question}</h2>
                <div className="flex justify-between mt-4">
                    <Link to={`/admin/edit/${flashcard.id}`} className="btn btn-accent">Edit</Link>
                    <button className="btn btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default FlashCardItem;
