import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';
import { LoaderSpinner } from '../components/Loader';
const EditFlashcard = () => {
    const { id } = useParams(); // Get the flashcard ID from the URL
    const navigate = useNavigate();
    const [flashcard, setFlashcard] = useState({ question: '', answer: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFlashcard = async() => {
            const res = await api.get(`/flashcards/${id}`);
            try {
                setFlashcard(res.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to load flashcard');
                setLoading(false);
                throw new Error(error.message);
            }
        }
        fetchFlashcard()
    }, [id]);

    const handleChange = (e) => {
        setFlashcard({
            ...flashcard,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.patch(`/flashcards/${id}`, flashcard)
            .then(() => {
                navigate('/admin'); // Redirect to the admin dashboard after successful update
            })
            .catch(err => {
                setError('Failed to update flashcard');
                throw new Error(err.message);
            });
    };

    if (loading) return <LoaderSpinner/>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-3xl font-bold text-bluePrimary mb-6">Edit Flashcard</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="question" className="block text-gray-700 font-bold mb-2">Question</label>
                    <input
                        type="text"
                        name="question"
                        value={flashcard.question}
                        onChange={handleChange}
                        className="input input-bordered w-full max-w-xs"
                        placeholder="Enter the question"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="answer" className="block text-gray-700 font-bold mb-2">Answer</label>
                    <input
                        type="text"
                        name="answer"
                        value={flashcard.answer}
                        onChange={handleChange}
                        className="input input-bordered w-full max-w-xs"
                        placeholder="Enter the answer"
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <button type="submit" className="btn btn-primary">Update Flashcard</button>
                    <button type="button" onClick={() => navigate('/admin')} className="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditFlashcard;
