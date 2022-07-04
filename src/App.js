import './App.css';
import Header from './components/Header';
import Hello from './components/Hello';
import Interests from './components/Interests';

function App() {
  return (
    <div className="App">
      <Header />
      <Hello />
      <Interests />
      <a href="https://www.flaticon.com/free-icons/layout" title="layout icons">
        Layout icons created by Freepik - Flaticon
      </a>
      <a
        href="https://www.flaticon.com/free-icons/web-development"
        title="web development icons"
      >
        Web development icons created by Eucalyp - Flaticon
      </a>
    </div>
  );
}

export default App;
