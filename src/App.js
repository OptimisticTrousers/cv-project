import Header from './components/common/Header/Header';
import Hello from './components/common/Hello/Hello';
import Interests from './components/common/Interests/Interests';
import CV from './components/common/CV/CV';
import Footer from './components/common/Footer/Footer';
import conditionallyRender from './helpers/conditionalRender';

function App() {
  return (
    <div className="App">
      <Header />
      <Hello />
      <Interests />
      <CV conditionallyRender={conditionallyRender} />
      <Footer />
    </div>
  );
}

export default App;
