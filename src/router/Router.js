import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import Support from '../pages/support/Support';
import Faq from '../pages/faq/Faq';
import Contact from '../pages/contact/Contact';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
