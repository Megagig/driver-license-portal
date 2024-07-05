import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import Router from './router/Router';

function App() {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
