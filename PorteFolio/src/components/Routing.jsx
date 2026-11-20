import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Navbar from './Navbar.jsx';
import Gallery from './Gallery.jsx';
import About from './About.jsx';
import Cv from './Cv.jsx';

export default function Routing() {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <div id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/gallery' element={<Gallery />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/cv' element={<Cv />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};