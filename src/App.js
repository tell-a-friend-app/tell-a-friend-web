import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import FeelingUnsafe from './Components/FeelingUnsafe';
import GetHelp from './Components/GetHelp';
import Footer from './Components/Footer';
import MailChimpModal from './Components/MailChimpModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const showMailChimpModal = () => {
    setShowModal(true);
  }

  const hideMailChimpModal = (event) => {
    event.stopPropagation();
    setShowModal(false);
  }

  return (
    <div className="App">
      {showModal ? <MailChimpModal hide={hideMailChimpModal}></MailChimpModal> : <div></div>}
      <Header show={showMailChimpModal}/>
      <FeelingUnsafe/>
      <GetHelp />
      <Footer />
    </div>
  );
}

export default App;
