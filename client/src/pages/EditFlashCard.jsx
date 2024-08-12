import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FlashCardContext } from '../context/FlashCardContext';
import api from '../api';
import { LoaderSpinner } from '../components/Loader';
const EditFlashcard = () => {

    useAuth();
    const {setFlashcards} = useContext(FlashCardContext);
    const { id } = useParams(); // Get the flashcard ID from the URL
    const navigate = useNavigate();
    const [flashcard, setFlashcard] = useState({ question: '', answer: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFlashcard = async () => {
            try {
                const res = await api.get(`/flashcards/${id}`);
                setFlashcard({
                    question: res.data.flashcard.question,
                    answer: res.data.flashcard.answer,
                });
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.patch(`/flashcards/${id}`, flashcard);
            if (res.data.status === 'success') {
                console.log(res.data.flashcard)
                setFlashcards((prevFlashcards) => {
                    const index = prevFlashcards.findIndex((flashcard) => flashcard.id === res.data.flashcard.id);
                    if (index !== -1) {
                      prevFlashcards[index] = res.data.flashcard;
                    }
                    return [...prevFlashcards];
                  });
                navigate('/admin');
            } else {
                alert('Error updating flashcard');
            }

        }
        catch (err) {
            setError('Failed to update flashcard');
            throw new Error(err.message);
        }
    };

    if (loading) return <LoaderSpinner />;
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
                        className="input input-bordered w-1/2"
                        placeholder="Enter the question"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="answer" className="block text-gray-700 font-bold mb-2">Answer</label>
                    <textarea
                        type="text"
                        name="answer"
                        value={flashcard.answer}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-1/2"
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
