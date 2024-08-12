import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FlashCardContext } from '../context/FlashCardContext';
import api from '../api';
import { LoaderSpinner } from '../components/Loader';
const CreateFlashcard = () => {

    useAuth();
    const {flashcards} = useContext(FlashCardContext);
    const navigate = useNavigate();
    const [flashcard, setFlashcard] = useState({ question: '', answer: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFlashcard({
            ...flashcard,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await api.post('/flashcards', flashcard);
            if (response.data.status==='success') {
                flashcards.push(response.data.flashcard);
                navigate('/admin');
            } else {
                alert('Error Creating flashcard')
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError('cannot create flashcard');
            throw new Error(error.message);
        }
    };

    if (loading) return <LoaderSpinner />;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-3xl font-bold text-bluePrimary mb-6">Create Flashcard</h2>
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" onClick={() => navigate(-1)} className="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default CreateFlashcard;
