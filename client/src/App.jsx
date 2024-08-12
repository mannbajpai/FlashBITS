import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FlashCardProvider } from './context/FlashCardContext';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import EditFlashcard from './pages/EditFlashCard';
import ErrorPage from './pages/ErrorPage';

function App() {
    return (
        <FlashCardProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path='/admin/edit/:id' element={<EditFlashcard/>}/>
                    <Route path='*' element={<ErrorPage/>}/>
                </Routes>
                <Footer />
            </Router>
        </FlashCardProvider>
    );
}

export default App;
