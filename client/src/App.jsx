import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FlashCardProvider } from './context/FlashCardContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';

function App() {
    return (
        <FlashCardProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
                <Footer />
            </Router>
        </FlashCardProvider>
    );
}

export default App;
