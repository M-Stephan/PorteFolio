import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Navbar from './Navbar.jsx';
import Gallery from './Gallery.jsx';

export default function Routing() {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <div id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/contact' element={<Contact />}/>
                        <Route path='/gallery' element={<Gallery />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};