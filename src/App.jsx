import './App.css';
import './index.css';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <>
    <div>
      <h1 className="text-3xl font-bold underline bg-orange-600">
        Nigeria Driver License Portal
      </h1>
      <p>Seamless Licensure For The Nigerian populace</p>
    </div>
    <HomePage />
    </>
  );
}

export default App;
