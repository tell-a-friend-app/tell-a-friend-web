import './App.css';
import Header from './Components/Header';
import FeelingUnsafe from './Components/FeelingUnsafe';
import GetHelp from './Components/GetHelp';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <FeelingUnsafe/>
      <GetHelp />
      <Footer />
    </div>
  );
}

export default App;
